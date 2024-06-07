import { Preview } from "@storybook/react";
import { theme } from "../src/config/theme";

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
