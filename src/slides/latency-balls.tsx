import { FunctionalComponent } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

interface Ball {
    id: number;
    x: number;
    target: number;
    latency: number;
    label: string;
    color: string;
    active: boolean;
    element: SVGCircleElement | null;
}

const LATENCIES = [
    { ns: 1, label: "L1", color: "var(--ctp-green)" },
    { ns: 4, label: "L2", color: "var(--ctp-blue)" },
    { ns: 40, label: "L3", color: "var(--ctp-sapphire)" },
    { ns: 80, label: "RAM", color: "var(--ctp-mauve)" },
    { ns: 100000, label: "SSD", color: "var(--ctp-red)" },
];

const POOL_SIZE = 200;

/**
 * Show the cpu to cache latency with bouncing balls.
 */
export const LatencyBalls: FunctionalComponent = () => {
    const [timeScale, setTimeScale] = useState(1000000); // Default: 1M times slower
    const ballPool = useRef<Ball[]>([]);
    const ballGroupRef = useRef<SVGGElement>(null);
    const lastSpawnTimes = useRef<Record<string, number>>({});
    const animationFrame = useRef<number>();

    const CPU_X = 100;
    const START_Y = 360;
    const BALL_RADIUS = 8;
    const TARGET_X = 1100;

    // Initialize object pool and DOM elements once
    useEffect(() => {
        if (!ballGroupRef.current) return;

        ballPool.current = Array.from({ length: POOL_SIZE }, (_, i) => {
            // Create SVG circle element
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("r", String(BALL_RADIUS));
            circle.setAttribute("stroke", "none");
            circle.style.display = "none";
            ballGroupRef.current!.appendChild(circle);

            return {
                id: i,
                x: 0,
                target: 0,
                latency: 0,
                label: "",
                color: "",
                active: false,
                element: circle,
            };
        });
    }, []);

    useEffect(() => {
        // Deactivate all balls when timeScale changes
        ballPool.current.forEach(ball => {
            ball.active = false;
            if (ball.element) ball.element.style.display = "none";
        });
        lastSpawnTimes.current = {};

        const animate = () => {
            const currentTime = Date.now();

            // Spawn new balls based on latency frequencies
            LATENCIES.forEach((latency, index) => {
                const lastSpawn = lastSpawnTimes.current[latency.label] || 0;
                const intervalMs = (latency.ns / 1000000) * timeScale; // Convert ns to ms with scale

                if (currentTime - lastSpawn >= intervalMs) {
                    // Find inactive ball in pool
                    const ball = ballPool.current.find(b => !b.active);
                    if (ball && ball.element) {
                        const targetY = 150 + index * 100;
                        ball.active = true;
                        ball.x = CPU_X;
                        ball.target = targetY;
                        ball.latency = latency.ns;
                        ball.label = latency.label;
                        ball.color = latency.color;
                        ball.element.setAttribute("fill", latency.color);
                        ball.element.style.display = "";
                        lastSpawnTimes.current[latency.label] = currentTime;
                    }
                }
            });

            // Update ball positions via direct DOM manipulation
            for (let i = 0; i < ballPool.current.length; i++) {
                const ball = ballPool.current[i];
                if (!ball.active || !ball.element) continue;

                const speed = (1000 / timeScale) * (TARGET_X - CPU_X) / (ball.latency / 1000000);
                ball.x += speed / 60; // 60fps

                if (ball.x >= TARGET_X + 50) {
                    ball.active = false;
                    ball.element.style.display = "none";
                } else {
                    const progress = (ball.x - CPU_X) / (TARGET_X - CPU_X);
                    const y = START_Y + (ball.target - START_Y) * progress;
                    ball.element.setAttribute("cx", String(ball.x));
                    ball.element.setAttribute("cy", String(y));
                }
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [timeScale]);

    return (
        <SvgContainer>
            {/* CPU Box */}
            <rect x="50" y="300" width="100" height="120" rx="8"
                fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
            <text x="100" y="370" fill="var(--ctp-text)" font-size="24"
                font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
                CPU
            </text>

            {/* Target boxes and labels */}
            {LATENCIES.map((latency, index) => {
                const y = 150 + index * 100;
                return (
                    <g key={latency.label}>
                        {/* Target box */}
                        <rect x="1050" y={y - 30} width="150" height="60" rx="8"
                            fill="none" stroke={latency.color} stroke-width={STROKE_WIDTH} />
                        <text x="1125" y={y} fill="var(--ctp-text)" font-size="20"
                            font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
                            {latency.label}
                        </text>
                        <text x="1125" y={y + 20} fill="var(--ctp-subtext1)" font-size="16"
                            font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
                            {latency.ns >= 1000 ? `${latency.ns / 1000}µs` : `${latency.ns}ns`}
                        </text>

                        {/* Path line */}
                        <line x1={CPU_X + 50} y1={START_Y} x2="1050" y2={y}
                            stroke="var(--ctp-overlay0)" stroke-width="1" stroke-dasharray="5,5" />
                    </g>
                );
            })}

            {/* Animated balls - DOM elements are created and managed directly */}
            <g ref={ballGroupRef} />

            {/* Time scale control label */}
            <text x="640" y="680" fill="var(--ctp-text)" font-size="20"
                font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
                Time Scale: {
                    timeScale >= 1000000
                        ? `${(timeScale / 1000000).toFixed(1)}M× slower`
                        : timeScale >= 1000
                            ? `${(timeScale / 1000).toFixed(1)}k× slower`
                            : `${timeScale.toFixed(0)}× slower`
                }
            </text>

            {/* Foreign object for HTML input */}
            <foreignObject x="340" y="680" width="600" height="30">
                <input
                    type="range"
                    min="3"
                    max="7"
                    step="0.1"
                    value={Math.log10(timeScale)}
                    onInput={(e) => setTimeScale(Math.pow(10, parseFloat((e.target as HTMLInputElement).value)))}
                    style={{ width: '100%' }}
                />
            </foreignObject>
        </SvgContainer>
    );
};
