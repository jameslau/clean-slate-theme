// WordPress Dependencies

// this import is how wordpress packages react into wordpress 
// (https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/)
import { createRoot } from "@wordpress/element";

// Internal Dependencies

import { App } from ".app";
import "./style.scss";

const domNode = document.getElementById("full-width-block");
const root = createRoot(domNode);
root.render(<App />);