import { Parameters } from "storybook-framework-qwik";

import "../src/global.css";
import "../src/index.scss";

export const parameters: Parameters = {
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    // showRoots: true,
  },
  docs: {
    iframeHeight: "200px",
  },
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "miami", dataTheme: "miami", color: "#00755e" },
        { name: "dark", dataTheme: "dark", color: "#ffb7d5" },
        { name: "lights2", dataTheme: "lights2", color: "#ff007f" },
        { name: "dim", dataTheme: "dim", color: "#ff007f" },
        { name: "default", dataTheme: "default", color: "#ff007f" },
      ],
    },
  },
  dataTheme: {
    defaultValue: "dark",
  },
};