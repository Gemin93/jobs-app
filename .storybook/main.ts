import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "@chromatic-com/storybook",
  ],

  framework: "@storybook/nextjs",

  docs: {},

  webpackFinal: async (config) => {
    if (config && config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
    }

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
