import type { Preview } from "@storybook/react";
import "@/app/globals.css";

import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize msw
initialize();

export const decorators = [mswDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
