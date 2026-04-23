import { FunctionalComponent } from "preact";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

export const SyncEngineWebWorker: FunctionalComponent = () => (
    <SvgContainer>
        {/* Client section (contains UI, Local Storage, Web Worker) */}
        <rect
            x="30" y="40" width="1060" height="640"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />

        {/* UI box */}
        <rect
            x="80" y="180" width="170" height="360"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="165" y="365" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            UI
        </text>

        {/* Local Storage box */}
        <rect
            x="440" y="180" width="200" height="360"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="540" y="350" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Local
        </text>
        <text x="540" y="385" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Storage
        </text>

        {/* Live query arc (dashed, from Local Storage to UI) */}
        <path
            d="M 440,250 C 370,140 320,140 250,250"
            fill="none"
            stroke="var(--ctp-subtext0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
            marker-end="url(#sew-arrowhead-dashed)"
        />
        <text x="345" y="165" fill="var(--ctp-text)" font-size="26" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            live query
        </text>

        {/* Write arc (solid, from UI to Local Storage) */}
        <path
            d="M 250,470 C 320,580 370,580 440,470"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
            marker-end="url(#sew-arrowhead)"
        />
        <text x="345" y="560" fill="var(--ctp-text)" font-size="26" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            write
        </text>

        {/* Web Worker box */}
        <rect
            x="830" y="280" width="210" height="180"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="935" y="360" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Web
        </text>
        <text x="935" y="395" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Worker
        </text>

        {/* Live query arrow (dashed) from Local Storage to Web Worker */}
        <line
            x1="640" y1="370" x2="830" y2="370"
            stroke="var(--ctp-subtext0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
            marker-end="url(#sew-arrowhead-dashed)"
        />
        <text x="735" y="355" fill="var(--ctp-text)" font-size="26" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            live query
        </text>

        {/* Remote Storage box (outside Client) */}
        <rect
            x="1160" y="220" width="100" height="280"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="1210" y="350" fill="var(--ctp-text)" font-size="24" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Remote
        </text>
        <text x="1210" y="380" fill="var(--ctp-text)" font-size="24" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Storage
        </text>

        {/* Socket bidirectional dashed arrow between Web Worker and Remote Storage */}
        <line
            x1="1040" y1="370" x2="1160" y2="370"
            stroke="var(--ctp-subtext0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
            marker-start="url(#sew-arrowhead-dashed-left)"
            marker-end="url(#sew-arrowhead-dashed)"
        />
        <text x="1100" y="355" fill="var(--ctp-text)" font-size="22" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            socket
        </text>

        {/* Arrow markers */}
        <defs>
            <marker
                id="sew-arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="sew-arrowhead-dashed"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-subtext0)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="sew-arrowhead-dashed-left"
                markerWidth="10"
                markerHeight="10"
                refX="2"
                refY="3"
                orient="auto"
            >
                <path d="M 10,0 L 2,3 L 10,6" fill="none" stroke="var(--ctp-subtext0)" stroke-width="1" stroke-linejoin="round" />
            </marker>
        </defs>
    </SvgContainer>
);
