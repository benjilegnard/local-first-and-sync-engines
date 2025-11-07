import { FunctionalComponent } from "preact";
import { STROKE_WIDTH, SvgContainer } from "../components/svg-container";

export const LocalFirstSoftware: FunctionalComponent = () => (
    <SvgContainer>
        {/* Title */}
        <text x="72" y="90" fill="var(--ctp-text)" font-size="36" font-family="'Hack', sans-serif">
            Local-first software
        </text>

        {/* Left section - Client */}
        <rect
            x="75" y="120" width="460" height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />

        {/* Action button */}
        <ellipse cx="258" cy="200" rx="80" ry="35" fill="none" stroke="var(--ctp-pink)" stroke-width={STROKE_WIDTH} />
        <text x="258" y="210" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Action
        </text>

        {/* Arrow to Action */}
        <line x1="80" y1="200" x2="165" y2="200" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#lfs-arrowhead)" />

        {/* "zéro latence !" text */}
        <text x="592" y="170" fill="var(--ctp-green)" font-size="26" font-family="'Source Sans Pro', sans-serif">
            zéro
        </text>
        <text x="592" y="200" fill="var(--ctp-green)" font-size="26" font-family="'Source Sans Pro', sans-serif">
            latence !
        </text>

        {/* "Réactif Instantanément" text */}
        <text x="150" y="310" fill="var(--ctp-peach)" font-size="24" font-family="'Source Sans Pro', sans-serif">
            Réactif
        </text>
        <text x="120" y="340" fill="var(--ctp-peach)" font-size="24" font-family="'Source Sans Pro', sans-serif">
            Instantanément
        </text>

        {/* Arrow from Action to BDD */}
        <line x1="258" y1="235" x2="380" y2="310" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#lfs-arrowhead)" />

        {/* Database cylinder (BDD) */}
        <ellipse cx="355" cy="360" rx="65" ry="20" fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <line x1="290" y1="360" x2="290" y2="430" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <line x1="420" y1="360" x2="420" y2="430" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <path d="m 290,430 a 65,20 0 0 0 130,0" fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <text x="355" y="420" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            BDD
        </text>

        {/* Arrow from BDD to Résultat */}
        <line x1="355" y1="470" x2="258" y2="530" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#lfs-arrowhead)" />

        {/* Résultat box */}
        <rect x="170" y="530" width="175" height="60" rx="8" fill="none" stroke="var(--ctp-blue)" stroke-width={STROKE_WIDTH} />
        <text x="258" y="567" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Résultat
        </text>

        {/* Arrow from Résultat */}
        <line x1="170" y1="560" x2="80" y2="560" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} marker-end="url(#lfs-arrowhead)" />

        {/* "Fonctionne hors-ligne !" text */}
        <text x="592" y="550" fill="var(--ctp-green)" font-size="24" font-family="'Source Sans Pro', sans-serif">
            Fonctionne
        </text>
        <text x="592" y="580" fill="var(--ctp-green)" font-size="24" font-family="'Source Sans Pro', sans-serif">
            hors-ligne !
        </text>

        {/* Right section - Server */}
        <rect
            x="760" y="120" width="440" height="520"
            fill="none"
            stroke="var(--ctp-overlay0)"
            stroke-width={STROKE_WIDTH}
            stroke-dasharray="10,5"
        />

        {/* "Tolère du downtime" text */}
        <path d="m 880,180 60,140" stroke="var(--ctp-green)" stroke-width="2" marker-end="url(#lfs-arrowhead-green)" />
        <text x="950" y="170" fill="var(--ctp-green)" font-size="26" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Tolère du downtime
        </text>

        {/* Serveur box */}
        <rect x="855" y="330" width="190" height="90" rx="8" fill="none" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />
        <text x="950" y="385" fill="var(--ctp-text)" font-size="28" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Serveur
        </text>

        {/* Bidirectional arrows with "Synchronisation" between BDD and Serveur */}
        <path d="M 420,380 C 641.75,342.25 850,360 850,360" fill="none" stroke="var(--ctp-green)" stroke-width={STROKE_WIDTH} marker-end="url(#lfs-arrowhead-green)" />
        <path d="M 850,390 C 640,430 420,410 420,410" fill="none" stroke="var(--ctp-green)" stroke-width={STROKE_WIDTH} marker-end="url(#lfs-arrowhead-green)" />

        {/* "Synchronisation" text */}
        <text x="640" y="390" fill="var(--ctp-green)" font-size="24" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Synchronisation
        </text>

        {/* "En direct!" text with arrow */}
        <line x1="890" y1="520" x2="690" y2="430" stroke="var(--ctp-green)" stroke-width="2" marker-end="url(#lfs-arrowhead-green)" />
        <text x="950" y="530" fill="var(--ctp-green)" font-size="22" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            En direct!
        </text>

        {/* "Ou en différé" text with arrow */}
        <line x1="870" y1="590" x2="630" y2="430" stroke="var(--ctp-green)" stroke-width="2" marker-end="url(#lfs-arrowhead-green)" />
        <text x="950" y="600" fill="var(--ctp-green)" font-size="22" font-family="'Source Sans Pro', sans-serif" text-anchor="middle">
            Ou en différé
        </text>

        {/* Arrow markers */}
        <defs>
            <marker
                id="lfs-arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="lfs-arrowhead-left"
                markerWidth="10"
                markerHeight="10"
                refX="2"
                refY="3"
                orient="auto"
            >
                <path d="M 10,0 L 2,3 L 10,6" fill="none" stroke="var(--ctp-text)" stroke-width="1" stroke-linejoin="round" />
            </marker>
            <marker
                id="lfs-arrowhead-green"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
            >
                <path d="M 0,0 L 8,3 L 0,6" fill="none" stroke="var(--ctp-green)" stroke-width="1" stroke-linejoin="round" />
            </marker>
        </defs>
    </SvgContainer>
);
