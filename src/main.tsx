import "./style.scss";

import "reveal.js/plugin/highlight/highlight.esm";

import { ComponentChild, render } from "preact";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Notes from "reveal.js/plugin/notes/notes";
import Highlight from "reveal.js/plugin/highlight/highlight";

import { NetworkBalls } from "./slides/network-balls";

let deck = new Reveal({
    plugins: [Markdown, Notes, Highlight],
});

const components: Record<string, ComponentChild> = {
    // add ids as keys and preact component here if needed
    // "latency-balls": LatencyBalls,
    "network-balls": NetworkBalls,
    // "classic-architecture": 
};

deck
    .initialize({
        progress: false,
        controls: true,
        slideNumber: "c/t",
        showSlideNumber: "speaker",
        hashOneBasedIndex: true,
        hash: true,
        pause: false,
        transition: "none",
        backgroundTransition: "none",
        history: true,
        pdfSeparateFragments: false,
    })
    .then(() => {
        // initialize preact components in slides
        Object.keys(components).forEach((id) => {
            const element = document.getElementById(id);
            if (!element) {
                console.warn(`Element with id ${id} is missing!`);
                return;
            }
            render(components[id], element);
        });
        Reveal.on('slidechanged', (event) => {
            console.log("slidechanged", event);
        });
    });

