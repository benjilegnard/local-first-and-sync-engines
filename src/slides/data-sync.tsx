import { SvgContainer, STROKE_WIDTH } from "../components/svg-container";

export function DataSync() {
  return (
    <SvgContainer>
      {/* Components stack */}
      <g>
        <rect
          x="20"
          y="240"
          width="200"
          height="140"
          rx="8"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <rect
          x="30"
          y="250"
          width="200"
          height="140"
          rx="8"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <rect
          x="40"
          y="260"
          width="200"
          height="140"
          rx="8"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="140"
          y="350"
          font-size="24"
          font-weight="600"
          fill="var(--ctp-mauve)"
          text-anchor="middle"
        >
          Components
        </text>
      </g>

      {/* Local store database */}
      <g>
        {/* Cylinder bottom */}
        <ellipse
          cx="380"
          cy="430"
          rx="60"
          ry="25"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        {/* Cylinder body */}
        <rect
          x="320"
          y="290"
          width="120"
          height="140"
          fill="var(--ctp-base)"
          stroke="none"
        />
        {/* Cylinder sides */}
        <line
          x1="320"
          y1="290"
          x2="320"
          y2="430"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <line
          x1="440"
          y1="290"
          x2="440"
          y2="430"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        {/* Cylinder top */}
        <ellipse
          cx="380"
          cy="290"
          rx="60"
          ry="25"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="380"
          y="355"
          font-size="22"
          font-weight="600"
          fill="var(--ctp-blue)"
          text-anchor="middle"
        >
          Local
        </text>
        <text
          x="380"
          y="385"
          font-size="22"
          font-weight="600"
          fill="var(--ctp-blue)"
          text-anchor="middle"
        >
          store
        </text>
      </g>

      {/* Sync bubble */}
      <g>
        <ellipse
          cx="640"
          cy="360"
          rx="80"
          ry="60"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="640"
          y="370"
          font-size="28"
          font-weight="600"
          fill="var(--ctp-mauve)"
          text-anchor="middle"
        >
          Sync
        </text>
      </g>

      {/* Authorise middleware */}
      <g>
        <rect
          x="920"
          y="240"
          width="80"
          height="200"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="960"
          y="355"
          font-size="22"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 960 355)"
        >
          Authorise
        </text>
      </g>

      {/* Database */}
      <g>
        {/* Cylinder bottom */}
        <ellipse
          cx="1130"
          cy="430"
          rx="60"
          ry="25"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        {/* Cylinder body */}
        <rect
          x="1070"
          y="290"
          width="120"
          height="140"
          fill="var(--ctp-base)"
          stroke="none"
        />
        {/* Cylinder sides */}
        <line
          x1="1070"
          y1="290"
          x2="1070"
          y2="430"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <line
          x1="1190"
          y1="290"
          x2="1190"
          y2="430"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        {/* Cylinder top */}
        <ellipse
          cx="1130"
          cy="290"
          rx="60"
          ry="25"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="1130"
          y="375"
          font-size="24"
          font-weight="600"
          fill="var(--ctp-blue)"
          text-anchor="middle"
        >
          Database
        </text>
      </g>
    </SvgContainer>
  );
}
