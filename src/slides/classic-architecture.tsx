import { FunctionalComponent } from "preact";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

export const ClassicArchitecture: FunctionalComponent = () => (
    <SvgContainer>
        {/* Front section */}
        <rect
            x="70"
            y="100"
            width="480"
            height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />
        <text
            x="290"
            y="140"
            fill="var(--ctp-subtext1)"
            font-size="32"
            font-family="'Source Sans Pro', sans-serif"
            text-anchor="middle"
        >
            Front
        </text>

        {/* Client box */}
        <rect
            x="170"
            y="320"
            width="190"
            height="90"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text
            x="265"
            y="370"
            fill="var(--ctp-text)"
            font-size="28"
            font-family="'Source Sans Pro', sans-serif"
            text-anchor="middle"
        >
            Client
        </text>

        {/* Back section */}
        <rect
            x="725"
            y="100"
            width="480"
            height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />
        <text
            x="965"
            y="140"
            fill="var(--ctp-subtext1)"
            font-size="32"
            font-family="'Source Sans Pro', sans-serif"
            text-anchor="middle"
        >
            Back
        </text>

        {/* Arrow from Client to Server */}
        <line
            x1="380"
            y1="370"
            x2="855"
            y2="370"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
            marker-end="url(#ca-arrowhead)"
            marker-start="url(#ca-arrowhead-left)"
        />

        {/* Server box */}
        <rect
            x="870"
            y="320"
            width="190"
            height="90"
            rx="8"
            fill="none"
            stroke="var(--ctp-text)"
            stroke-width={STROKE_WIDTH}
        />
        <text
            x="965"
            y="375"
            fill="var(--ctp-text)"
            font-size="28"
            font-family="'Source Sans Pro', sans-serif"
            text-anchor="middle"
        >
            Serveur
        </text>

        {/* Arrow markers */}
        <defs>
            <marker
                id="ca-arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path
                    d="M 0,0 8,3 0,6"
                    fill="none"
                    stroke="var(--ctp-text)"
                    stroke-width="1"
                    stroke-linejoin="round"
                />
            </marker>
            <marker
                id="ca-arrowhead-left"
                markerWidth="10"
                markerHeight="10"
                refX="2"
                refY="3"
                orient="auto"
            >
                <path
                    d="M 10,0 L 2,3 L 10,6"
                    fill="none"
                    stroke="var(--ctp-text)"
                    stroke-width="1"
                    stroke-linejoin="round"
                />
            </marker>
        </defs>
    </SvgContainer>
);
