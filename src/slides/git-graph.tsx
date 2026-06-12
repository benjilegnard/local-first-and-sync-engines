import { FunctionalComponent } from "preact";
import { SvgContainer, STROKE_WIDTH } from "../components/svg-container";

interface Commit {
    id: string;
    x: number;
    y: number;
    mergedX: number; // x position once linearized onto main
    color: string;
    label: string;
    merge?: boolean;
}

const COMMIT_RADIUS = 20;
const MAIN_Y = 360;
const FEATURE_Y = 160;
const FEATURE2_Y = 560;

// X positions along the branched timeline
const C1_X = 120;
const C2_X = 300; // branch point for both features
const M1_X = 760; // first merge
const M2_X = 1000; // second merge
const C3_X = 1160;
const F1_X = 480;
const F2_X = 620;
const G1_X = 480;
const G2_X = 700;
const G3_X = 860;

// Commits in linearized (merged) order: c1 c2 f1 f2 m1 g1 g2 g3 m2 c3
const commits: Commit[] = [
    // main branch
    { id: "c1", x: C1_X, y: MAIN_Y, mergedX: 120, color: "var(--ctp-blue)", label: "c1" },
    { id: "c2", x: C2_X, y: MAIN_Y, mergedX: 236, color: "var(--ctp-mauve)", label: "c2" },
    // first feature branch (above)
    { id: "f1", x: F1_X, y: FEATURE_Y, mergedX: 351, color: "var(--ctp-yellow)", label: "f1" },
    { id: "f2", x: F2_X, y: FEATURE_Y, mergedX: 467, color: "var(--ctp-peach)", label: "f2" },
    { id: "m1", x: M1_X, y: MAIN_Y, mergedX: 582, color: "var(--ctp-teal)", label: "m1", merge: true },
    // second feature branch (below)
    { id: "g1", x: G1_X, y: FEATURE2_Y, mergedX: 698, color: "var(--ctp-green)", label: "g1" },
    { id: "g2", x: G2_X, y: FEATURE2_Y, mergedX: 813, color: "var(--ctp-sky)", label: "g2" },
    { id: "g3", x: G3_X, y: FEATURE2_Y, mergedX: 929, color: "var(--ctp-red)", label: "g3" },
    { id: "m2", x: M2_X, y: MAIN_Y, mergedX: 1044, color: "var(--ctp-teal)", label: "m2", merge: true },
    { id: "c3", x: C3_X, y: MAIN_Y, mergedX: 1160, color: "var(--ctp-lavender)", label: "c3" },
];

// main: one straight horizontal line
const mainBranch = `M ${C1_X},${MAIN_Y} L ${C3_X},${MAIN_Y}`;

// feature: straight diagonal up from c2, horizontal, straight diagonal down to m1
const featureBranch = `M ${C2_X},${MAIN_Y} L ${F1_X},${FEATURE_Y} L ${F2_X},${FEATURE_Y} L ${M1_X},${MAIN_Y}`;

// feature-2: straight diagonal down from c2, horizontal, straight diagonal up to m2
const feature2Branch = `M ${C2_X},${MAIN_Y} L ${G1_X},${FEATURE2_Y} L ${G3_X},${FEATURE2_Y} L ${M2_X},${MAIN_Y}`;

/**
 * Git graph visualization showing two feature branches merging into main.
 * When `merged` is true, every commit is linearized onto a single highlighted
 * main line to show the reconciled result.
 */
export const GitGraphBase: FunctionalComponent<{ merged?: boolean }> = ({ merged = false }) => {
    const mainStroke = merged ? "var(--ctp-green)" : "var(--ctp-text)";
    const mainStrokeWidth = merged ? STROKE_WIDTH * 1.8 : STROKE_WIDTH;

    return (
        <SvgContainer>
            {/* Feature branch lines (only in the diverged view) */}
            {!merged && (
                <>
                    <path
                        d={featureBranch}
                        fill="none"
                        stroke="var(--ctp-text)"
                        stroke-width={STROKE_WIDTH}
                    />
                    <path
                        d={feature2Branch}
                        fill="none"
                        stroke="var(--ctp-text)"
                        stroke-width={STROKE_WIDTH}
                    />
                </>
            )}
            <path
                d={mainBranch}
                fill="none"
                stroke={mainStroke}
                stroke-width={mainStrokeWidth}
            />

            {/* Branch labels */}
            <text
                x={C1_X - 50}
                y={MAIN_Y + 5}
                fill={mainStroke}
                font-size="24"
                font-family="'Source Sans Pro', sans-serif"
                text-anchor="end"
                font-weight="bold"
            >
                main
            </text>
            {!merged && (
                <>
                    <text
                        x={(F1_X + F2_X) / 2}
                        y={FEATURE_Y - 40}
                        fill="var(--ctp-text)"
                        font-size="24"
                        font-family="'Source Sans Pro', sans-serif"
                        text-anchor="middle"
                        font-weight="bold"
                    >
                        feature
                    </text>
                    <text
                        x={(G1_X + G3_X) / 2}
                        y={FEATURE2_Y + 65}
                        fill="var(--ctp-text)"
                        font-size="24"
                        font-family="'Source Sans Pro', sans-serif"
                        text-anchor="middle"
                        font-weight="bold"
                    >
                        feature-2
                    </text>
                </>
            )}

            {/* Commit nodes */}
            {commits.map(commit => {
                const cx = merged ? commit.mergedX : commit.x;
                const cy = merged ? MAIN_Y : commit.y;
                return (
                    <g key={commit.id}>
                        {merged && commit.merge && (
                            <circle
                                cx={cx}
                                cy={cy}
                                r={COMMIT_RADIUS + 9}
                                fill="none"
                                stroke="var(--ctp-green)"
                                stroke-width={STROKE_WIDTH}
                            />
                        )}
                        <circle
                            cx={cx}
                            cy={cy}
                            r={COMMIT_RADIUS}
                            fill={commit.color}
                            stroke="var(--ctp-text)"
                            stroke-width={STROKE_WIDTH}
                        />
                        <text
                            x={cx}
                            y={cy + 7}
                            fill="var(--ctp-base)"
                            font-size="20"
                            font-family="'Source Code Pro', monospace"
                            text-anchor="middle"
                            font-weight="bold"
                        >
                            {commit.label}
                        </text>
                    </g>
                );
            })}

            {/* Merge indicators */}
            {commits.filter(c => c.merge).map(c => (
                <text
                    key={`label-${c.id}`}
                    x={merged ? c.mergedX : c.x}
                    y={MAIN_Y + 55}
                    fill={merged ? "var(--ctp-green)" : "var(--ctp-text)"}
                    font-size="20"
                    font-family="'Source Sans Pro', sans-serif"
                    text-anchor="middle"
                    font-style="italic"
                >
                    {merged ? "merged ✓" : "merge"}
                </text>
            ))}
        </SvgContainer>
    );
};

export const GitGraph: FunctionalComponent = () => <GitGraphBase />;
