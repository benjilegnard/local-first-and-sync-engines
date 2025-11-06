import { SvgContainer, STROKE_WIDTH } from "../components/svg-container";

export function DataFetching() {
  return (
    <SvgContainer>
      {/* Components stack */}
      <g>
        <rect
          x="20"
          y="220"
          width="200"
          height="140"
          rx="8"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <rect
          x="30"
          y="230"
          width="200"
          height="140"
          rx="8"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <rect
          x="40"
          y="240"
          width="200"
          height="140"
          rx="8"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="140"
          y="330"
          font-size="24"
          font-weight="600"
          fill="var(--ctp-mauve)"
          text-anchor="middle"
        >
          Components
        </text>
      </g>

      {/* Request flow - Top middleware */}
      <g>
        {/* Bind */}
        <rect
          x="300"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="335"
          y="180"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 335 180)"
        >
          Bind
        </text>

        {/* Fetch */}
        <rect
          x="390"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="425"
          y="180"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 425 180)"
        >
          Fetch
        </text>

        {/* Serialise */}
        <rect
          x="480"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="515"
          y="180"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 515 180)"
        >
          Serialise
        </text>
      </g>

      {/* Request bubble */}
      <g>
        <ellipse
          cx="690"
          cy="225"
          rx="80"
          ry="60"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="690"
          y="235"
          font-size="24"
          font-weight="600"
          fill="var(--ctp-mauve)"
          text-anchor="middle"
        >
          Request
        </text>
      </g>

      {/* Server-side middleware - Top */}
      <g>
        {/* Authorise */}
        <rect
          x="820"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="855"
          y="190"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 855 190)"
        >
          Authorise
        </text>

        {/* Deserialise */}
        <rect
          x="910"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="945"
          y="200"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 945 200)"
        >
          Deserialise
        </text>

        {/* Validate */}
        <rect
          x="1000"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="1035"
          y="185"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 1035 185)"
        >
          Validate
        </text>

        {/* Query */}
        <rect
          x="1090"
          y="80"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="1125"
          y="175"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 1125 175)"
        >
          Query
        </text>
      </g>

      {/* Response flow - Bottom middleware */}
      <g>
        {/* Apply */}
        <rect
          x="300"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="335"
          y="560"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 335 560)"
        >
          Apply
        </text>

        {/* Hydrate */}
        <rect
          x="390"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="425"
          y="570"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 425 570)"
        >
          Hydrate
        </text>

        {/* Deserialise */}
        <rect
          x="480"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="515"
          y="580"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 515 580)"
        >
          Deserialise
        </text>
      </g>

      {/* Response bubble */}
      <g>
        <ellipse
          cx="690"
          cy="495"
          rx="80"
          ry="60"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="690"
          y="505"
          font-size="24"
          font-weight="600"
          fill="var(--ctp-mauve)"
          text-anchor="middle"
        >
          Response
        </text>
      </g>

      {/* Vertical dotted lines around Request and Response */}
      <line
        x1="570"
        y1="80"
        x2="570"
        y2="640"
        stroke="var(--ctp-overlay1)"
        stroke-width={STROKE_WIDTH}
        stroke-dasharray="5,5"
      />
      <line
        x1="810"
        y1="80"
        x2="810"
        y2="640"
        stroke="var(--ctp-overlay1)"
        stroke-width={STROKE_WIDTH}
        stroke-dasharray="5,5"
      />

      {/* Server-side middleware - Bottom */}
      <g>
        {/* Serialise */}
        <rect
          x="820"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="855"
          y="570"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 855 570)"
        >
          Serialise
        </text>

        {/* Format */}
        <rect
          x="910"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="945"
          y="565"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 945 565)"
        >
          Format
        </text>

        {/* Filter */}
        <rect
          x="1000"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="1035"
          y="560"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 1035 560)"
        >
          Filter
        </text>

        {/* Coerce */}
        <rect
          x="1090"
          y="460"
          width="70"
          height="180"
          fill="var(--ctp-surface2)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="1125"
          y="565"
          font-size="20"
          font-weight="600"
          fill="var(--ctp-text)"
          text-anchor="middle"
          transform="rotate(-90 1125 565)"
        >
          Coerce
        </text>
      </g>

      {/* Database */}
      <g>
        {/* Cylinder bottom */}
        <ellipse
          cx="1200"
          cy="420"
          rx="50"
          ry="20"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        {/* Cylinder body */}
        <rect
          x="1150"
          y="300"
          width="100"
          height="120"
          fill="var(--ctp-base)"
          stroke="none"
        />
        {/* Cylinder sides */}
        <line
          x1="1150"
          y1="300"
          x2="1150"
          y2="420"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <line
          x1="1250"
          y1="300"
          x2="1250"
          y2="420"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        {/* Cylinder top */}
        <ellipse
          cx="1200"
          cy="300"
          rx="50"
          ry="20"
          fill="var(--ctp-base)"
          stroke="var(--ctp-text)"
          stroke-width={STROKE_WIDTH}
        />
        <text
          x="1200"
          y="370"
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
