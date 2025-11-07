import { FunctionalComponent } from "preact";
import { SvgContainer, STROKE_WIDTH } from "../components/svg-container";

interface Commit {
    id: string;
    x: number;
    y: number;
    color: string;
    label: string;
}

interface BranchLine {
    points: string;
}

/**
 * Git graph visualization showing branch merge with Catppuccin colors
 */
export const GitGraph: FunctionalComponent = () => {
    const COMMIT_RADIUS = 20;
    const MAIN_Y = 360;
    const FEATURE_Y = 200;

    // Commits on main and feature branches
    const commits: Commit[] = [
        { id: "c1", x: 200, y: MAIN_Y, color: "var(--ctp-blue)", label: "c1" },
        { id: "c2", x: 350, y: MAIN_Y, color: "var(--ctp-mauve)", label: "c2" },
        { id: "c3", x: 500, y: MAIN_Y, color: "var(--ctp-green)", label: "c3" },
        // Feature branch commits
        { id: "f1", x: 500, y: FEATURE_Y, color: "var(--ctp-yellow)", label: "f1" },
        { id: "f2", x: 650, y: FEATURE_Y, color: "var(--ctp-peach)", label: "f2" },
        { id: "f3", x: 800, y: FEATURE_Y, color: "var(--ctp-red)", label: "f3" },
        // Merge commit
        { id: "m1", x: 950, y: MAIN_Y, color: "var(--ctp-teal)", label: "m1" },
        // Continue main
        { id: "c4", x: 1100, y: MAIN_Y, color: "var(--ctp-lavender)", label: "c4" },
    ];

    // Branch lines
    const mainBranch = `M 200,${MAIN_Y} L 350,${MAIN_Y} L 500,${MAIN_Y} L 950,${MAIN_Y} L 1100,${MAIN_Y}`;

    // Feature branch: curve up from c3, horizontal through f1-f3, curve down to m1
    const featureBranch = `
        M 500,${MAIN_Y}
        Q 500,${(MAIN_Y + FEATURE_Y) / 2} 500,${FEATURE_Y}
        L 650,${FEATURE_Y}
        L 800,${FEATURE_Y}
        Q 875,${FEATURE_Y} 950,${(MAIN_Y + FEATURE_Y) / 2}
        L 950,${MAIN_Y}
    `;

    return (
        <SvgContainer>
            {/* Branch lines */}
            <path
                d={mainBranch}
                fill="none"
                stroke="var(--ctp-text)"
                stroke-width={STROKE_WIDTH}
            />
            <path
                d={featureBranch}
                fill="none"
                stroke="var(--ctp-text)"
                stroke-width={STROKE_WIDTH}
            />

            {/* Branch labels */}
            <text
                x="150"
                y={MAIN_Y + 5}
                fill="var(--ctp-text)"
                font-size="24"
                font-family="'Source Sans Pro', sans-serif"
                text-anchor="end"
                font-weight="bold"
            >
                main
            </text>
            <text
                x="450"
                y={FEATURE_Y - 40}
                fill="var(--ctp-text)"
                font-size="24"
                font-family="'Source Sans Pro', sans-serif"
                text-anchor="middle"
                font-weight="bold"
            >
                feature
            </text>

            {/* Commit nodes */}
            {commits.map(commit => (
                <g key={commit.id}>
                    <circle
                        cx={commit.x}
                        cy={commit.y}
                        r={COMMIT_RADIUS}
                        fill={commit.color}
                        stroke="var(--ctp-text)"
                        stroke-width={STROKE_WIDTH}
                    />
                    <text
                        x={commit.x}
                        y={commit.y + 7}
                        fill="var(--ctp-base)"
                        font-size="20"
                        font-family="'Source Code Pro', monospace"
                        text-anchor="middle"
                        font-weight="bold"
                    >
                        {commit.label}
                    </text>
                </g>
            ))}

            {/* Merge indicator arrow */}
            <text
                x="950"
                y={MAIN_Y + 60}
                fill="var(--ctp-text)"
                font-size="20"
                font-family="'Source Sans Pro', sans-serif"
                text-anchor="middle"
                font-style="italic"
            >
                merge
            </text>
        </SvgContainer>
    );
};
