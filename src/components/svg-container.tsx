import { FunctionalComponent } from "preact";

export const STROKE_WIDTH = 3.5;

export const NONE = "none";

/**
 * an SVG container, always the same size and same background
 */
export const SvgContainer: FunctionalComponent = (props) => (
    <div class="graphics">
        <svg width="1280" height="720" viewBox="0 0 1280 720">
            <rect
                id="background"
                width="1280"
                height="720"
                fill="var(--ctp-crust)"
                stroke="none" />
            {props.children}
        </svg>
    </div>
); 
