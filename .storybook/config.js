import { addParameters } from "@storybook/vue";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import "../src/styles/cm.css";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
