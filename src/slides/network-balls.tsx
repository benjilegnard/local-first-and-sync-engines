import { FunctionalComponent } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { SvgContainer } from "../components/svg-container";
import { WORLD_MAP_PATH } from "../constants/world-map-path";

interface City {
    id: string;
    name: string;
    x: number;
    y: number;
}

interface Connection {
    from: string;
    to: string;
    latencyMs: number;
}

interface Ball {
    id: number;
    connectionIndex: number;
    progress: number;
    active: boolean;
}

const CITIES: Record<string, City> = {
    virginia: { id: "virginia", name: "New York", x: 296.34, y: 251.10 },
    california: { id: "california", name: "San Francisco", x: 132.05, y: 240.37 },
    paris: { id: "paris", name: "Dublin", x: 568.79, y: 170.19 },
    tokyo: { id: "tokyo", name: "Tokyo", x: 1103.77, y: 244.50 },
    singapore: { id: "singapore", name: "Singapore", x: 988.19, y: 391.45 },
    saoPaulo: { id: "saoPaulo", name: "São Paulo", x: 402.02, y: 513.64 },
    sydney: { id: "sydney", name: "Sydney", x: 1151.65, y: 561.52 },
};

const CONNECTIONS: Connection[] = [
    { from: "virginia", to: "california", latencyMs: 84 },
    { from: "virginia", to: "paris", latencyMs: 108 },
    { from: "virginia", to: "saoPaulo", latencyMs: 165 },
    { from: "california", to: "tokyo", latencyMs: 144 },
    { from: "california", to: "saoPaulo", latencyMs: 301 },
    { from: "paris", to: "tokyo", latencyMs: 278 },
    { from: "paris", to: "singapore", latencyMs: 234 },
    { from: "paris", to: "saoPaulo", latencyMs: 240 },
    { from: "singapore", to: "tokyo", latencyMs: 90 },
    { from: "singapore", to: "sydney", latencyMs: 243 },
    { from: "singapore", to: "california", latencyMs: 144 },
    { from: "saoPaulo", to: "sydney", latencyMs: 334 },
    { from: "saoPaulo", to: "singapore", latencyMs: 363 },
];

/**
 * Generate a quadratic curve path between two cities
 */
const getCurvePath = (from: City, to: City): string => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const cx = from.x + dx / 2;
    const cy = from.y + dy / 2 - Math.abs(dx) * 0.15; // Arc upward
    return `M ${from.x},${from.y} Q ${cx},${cy} ${to.x},${to.y}`;
};

/**
 * Get a point along a quadratic curve
 */
const getPointOnCurve = (from: City, to: City, t: number): { x: number; y: number } => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const cx = from.x + dx / 2;
    const cy = from.y + dy / 2 - Math.abs(dx) * 0.15;

    const x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x;
    const y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y;

    return { x, y };
};

const POOL_SIZE = 300;

/**
 * Show the network latency on a world map with bouncing balls.
 */
export const NetworkBalls: FunctionalComponent = () => {
    const [, forceUpdate] = useState(0);
    const ballPool = useRef<Ball[]>([]);
    const lastSpawnTimes = useRef<Record<number, number>>({});
    const animationFrame = useRef<number>();

    const TIME_SCALE = 20; // Constant time scale

    // Initialize object pool once
    useEffect(() => {
        ballPool.current = Array.from({ length: POOL_SIZE }, (_, i) => ({
            id: i,
            connectionIndex: 0,
            progress: 0,
            active: false,
        }));
    }, []);

    useEffect(() => {
        const animate = () => {
            const currentTime = Date.now();
            let needsUpdate = false;

            // Spawn new balls for each connection
            CONNECTIONS.forEach((connection, index) => {
                const lastSpawn = lastSpawnTimes.current[index] || 0;
                const intervalMs = connection.latencyMs * TIME_SCALE;

                if (currentTime - lastSpawn >= intervalMs) {
                    // Find inactive ball in pool
                    const ball = ballPool.current.find(b => !b.active);
                    if (ball) {
                        ball.active = true;
                        ball.connectionIndex = index;
                        ball.progress = 0;
                        lastSpawnTimes.current[index] = currentTime;
                        needsUpdate = true;
                    }
                }
            });

            // Update ball positions
            for (let i = 0; i < ballPool.current.length; i++) {
                const ball = ballPool.current[i];
                if (!ball.active) continue;

                const connection = CONNECTIONS[ball.connectionIndex];
                const speed = 0.001 / TIME_SCALE * connection.latencyMs;
                ball.progress += speed;

                if (ball.progress >= 1) {
                    ball.active = false;
                    needsUpdate = true;
                } else {
                    needsUpdate = true;
                }
            }

            if (needsUpdate) {
                forceUpdate(prev => prev + 1);
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <SvgContainer>
            <path
                d={WORLD_MAP_PATH}
                id="world-map"
                fill="var(--ctp-surface2)"
            />

            {/* Connection paths */}
            {CONNECTIONS.map((connection, index) => {
                const from = CITIES[connection.from];
                const to = CITIES[connection.to];
                const path = getCurvePath(from, to);

                return (
                    <g key={index}>
                        <path
                            d={path}
                            fill="none"
                            stroke="var(--ctp-red)"
                            stroke-width="2"
                            opacity="0.4"
                        />
                        {/* Latency label at midpoint */}
                        <text
                            x={(from.x + to.x) / 2}
                            y={(from.y + to.y) / 2 - Math.abs(to.x - from.x) * 0.15 - 10}
                            fill="var(--ctp-red)"
                            font-size="14"
                            font-family="'Source Sans Pro', sans-serif"
                            text-anchor="middle"
                        >
                            {connection.latencyMs} ms
                        </text>
                    </g>
                );
            })}

            {/* Animated balls */}
            {ballPool.current.map(ball => {
                if (!ball.active) return null;
                const connection = CONNECTIONS[ball.connectionIndex];
                const from = CITIES[connection.from];
                const to = CITIES[connection.to];
                const pos = getPointOnCurve(from, to, ball.progress);

                return (
                    <circle
                        key={ball.id}
                        cx={pos.x}
                        cy={pos.y}
                        r="4"
                        fill="var(--ctp-yellow)"
                        stroke="none"
                    />
                );
            })}

            {/* City markers */}
            {Object.values(CITIES).map(city => (
                <g key={city.id}>
                    <circle
                        cx={city.x}
                        cy={city.y}
                        r="6"
                        fill="var(--ctp-red)"
                    />
                    <text
                        x={city.x}
                        y={city.y - 12}
                        fill="var(--ctp-text)"
                        font-size="16"
                        font-family="'Source Sans Pro', sans-serif"
                        text-anchor="middle"
                        font-weight="bold"
                    >
                        {city.name}
                    </text>
                </g>
            ))}
        </SvgContainer>
    );
};
