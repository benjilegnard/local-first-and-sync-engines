import { FunctionalComponent } from "preact";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

export const ClassicArchitecture: FunctionalComponent = () => (
    <SvgContainer>
        {/* Title */}
        <text x="72" y="90" fill="var(--ctp-text)" font-size="36" font-family="'Hack', sans-serif">
            Cloud-first software
        </text>

        {/* Client section */}
        <rect
            x="75" y="120" width="480" height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />
        <text x="295" y="160" fill="var(--ctp-subtext1)" font-size="32" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Client
        </text>

        {/* Action button */}
        <ellipse cx="298" cy="265" rx="80" ry="35" fill="none" stroke="var(--ctp-pink)" stroke-width={STROKE_WIDTH} />
        <text x="298" y="275" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Action
        </text>

        {/* Arrow to Action */}
        <line x1="20" y1="265" x2="200" y2="265" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead)" />

        {/* Loaders text */}
        <text x="368" y="345" fill="var(--ctp-peach)" font-size="26" font-family="'Source Sans Pro', sans-serif">
            Loaders
        </text>
        <text x="368" y="375" fill="var(--ctp-peach)" font-size="26" font-family="'Source Sans Pro', sans-serif">
            Spinners
        </text>
        <text x="368" y="405" fill="var(--ctp-peach)" font-size="26" font-family="'Source Sans Pro', sans-serif">
            Squelettes
        </text>

        {/* Résultat box */}
        <rect x="203" y="420" width="175" height="60" rx="8" fill="none" stroke="var(--ctp-blue)" stroke-width={STROKE_WIDTH} />
        <text x="290" y="457" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Résultat
        </text>

        {/* Arrow from Résultat */}
        <line x1="180" y1="450" x2="20" y2="450" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead-left)" />

        {/* Cloud section */}
        <rect
            x="777" y="120" width="480" height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />
        <text x="1017" y="185" fill="var(--ctp-subtext1)" font-size="32" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            "Cloud"
        </text>

        {/* Internet cloud */}
        <path
            d="M 667 380 Q 600 340, 620 300 Q 635 280, 665 290 Q 680 250, 720 270 Q 760 250, 775 290 Q 810 280, 815 310 Q 825 340, 775 360 Q 780 400, 740 400 Q 710 410, 667 380 Z"
            fill="none"
            stroke="var(--ctp-sapphire)"
            stroke-width={STROKE_WIDTH}
        />
        <text x="667" y="360" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Internet
        </text>

        {/* Latence text */}
        <text x="667" y="230" fill="var(--ctp-pink)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Latence
        </text>

        {/* Erreurs réseau text */}
        <text x="667" y="560" fill="var(--ctp-red)" font-size="30" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Erreurs réseau
        </text>

        {/* Arrow from Client to Internet */}
        <line x1="555" y1="350" x2="600" y2="330" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead)" />

        {/* Arrow from Internet to Server */}
        <line x1="790" y1="330" x2="825" y2="350" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead)" />

        {/* Serveur box */}
        <rect x="825" y="310" width="190" height="90" rx="8" fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <text x="920" y="365" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Serveur
        </text>

        {/* Database cylinder */}
        <ellipse cx="1133" cy="330" rx="65" ry="20" fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <line x1="1068" y1="330" x2="1068" y2="370" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <line x1="1198" y1="330" x2="1198" y2="370" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <ellipse cx="1133" cy="370" rx="65" ry="20" fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <text x="1133" y="360" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            BDD
        </text>

        {/* Bidirectional arrows between Server and DB */}
        <line x1="1015" y1="340" x2="1065" y2="340" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead)" />
        <line x1="1065" y1="360" x2="1015" y2="360" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead)" />

        {/* "DOIT TOUJOURS être EN LIGNE" text */}
        <text x="1017" y="560" fill="var(--ctp-mauve)" font-size="26" font-family="'Source Sans Pro', sans-serif" text-anchor="middle" font-style="italic">
            DOIT TOUJOURS ÊTRE
        </text>
        <text x="1017" y="595" fill="var(--ctp-mauve)" font-size="26" font-family="'Source Sans Pro', sans-serif" text-anchor="middle" font-style="italic">
            EN LIGNE
        </text>

        {/* Arrow from Internet back to Résultat */}
        <line x1="600" y1="370" x2="400" y2="420" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#arrowhead)" />

        {/* Arrow markers */}
        <defs>
            <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="arrowhead-left"
                markerWidth="10"
                markerHeight="10"
                refX="2"
                refY="3"
                orient="auto"
            >
                <path d="M 10,0 L 2,3 L 10,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
        </defs>
    </SvgContainer>
);
