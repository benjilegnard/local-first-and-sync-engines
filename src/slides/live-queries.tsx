import { FunctionalComponent } from "preact";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

export const LiveQueries: FunctionalComponent = () => (
    <SvgContainer>
        {/* Title */}
        <text x="72" y="90" fill="var(--ctp-text)" font-size="36" font-family="'Hack', sans-serif">
            Live queries
        </text>

        {/* Client section */}
        <rect
            x="75" y="120" width="1130" height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />
        <text x="640" y="160" fill="var(--ctp-subtext1)" font-size="32" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Client
        </text>

        {/* UI box */}
        <rect
            x="280" y="240" width="200" height="340"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="380" y="420" fill="var(--ctp-text)" font-size="32" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            UI
        </text>

        {/* Local Storage box */}
        <rect
            x="800" y="240" width="200" height="340"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="900" y="410" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Local
        </text>
        <text x="900" y="445" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Storage
        </text>

        {/* Live query arc (dashed, from Local Storage to UI) */}
        <path
            d="M 800,310 C 700,200 560,200 480,310"
            fill="none"
            stroke="var(--ctp-subtext0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
            marker-end="url(#lq-arrowhead-dashed)"
        />
        <text x="640" y="225" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            live query
        </text>

        {/* Write arc (solid, from UI to Local Storage) */}
        <path
            d="M 480,510 C 560,620 700,620 800,510"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
            marker-end="url(#lq-arrowhead)"
        />
        <text x="640" y="615" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            write
        </text>

        {/* Arrow markers */}
        <defs>
            <marker
                id="lq-arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="lq-arrowhead-dashed"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-subtext0)" stroke-width="1" stroke-linejoin="round" />
            </marker>
        </defs>
    </SvgContainer>
);
