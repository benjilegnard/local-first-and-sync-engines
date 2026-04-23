import { FunctionalComponent } from "preact";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

export const SyncEngineRemoteStorage: FunctionalComponent = () => (
    <SvgContainer>
        {/* Client section */}
        <rect
            x="40" y="60" width="900" height="600"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />
        <text x="490" y="100" fill="var(--ctp-subtext1)" font-size="32" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Client
        </text>

        {/* UI box */}
        <rect
            x="120" y="200" width="200" height="340"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="220" y="380" fill="var(--ctp-text)" font-size="32" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            UI
        </text>

        {/* Local Storage box */}
        <rect
            x="640" y="200" width="200" height="340"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="740" y="370" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Local
        </text>
        <text x="740" y="405" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Storage
        </text>

        {/* Live query arc (dashed, from Local Storage to UI) */}
        <path
            d="M 640,270 C 540,160 400,160 320,270"
            fill="none"
            stroke="var(--ctp-subtext0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
            marker-end="url(#ser-arrowhead-dashed)"
        />
        <text x="480" y="185" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            live query
        </text>

        {/* Write arc (solid, from UI to Local Storage) */}
        <path
            d="M 320,470 C 400,580 540,580 640,470"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
            marker-end="url(#ser-arrowhead)"
        />
        <text x="480" y="575" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            write
        </text>

        {/* Remote Storage box */}
        <rect
            x="1040" y="200" width="200" height="340"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="1140" y="370" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Remote
        </text>
        <text x="1140" y="405" fill="var(--ctp-text)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Storage
        </text>

        {/* Sync engine bidirectional dashed arrow between Local Storage and Remote Storage */}
        <line
            x1="840" y1="370" x2="1040" y2="370"
            stroke="var(--ctp-subtext0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
            marker-start="url(#ser-arrowhead-dashed-left)"
            marker-end="url(#ser-arrowhead-dashed)"
        />
        <text x="940" y="355" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            sync engine
        </text>

        {/* Arrow markers */}
        <defs>
            <marker
                id="ser-arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="ser-arrowhead-dashed"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-subtext0)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="ser-arrowhead-dashed-left"
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
