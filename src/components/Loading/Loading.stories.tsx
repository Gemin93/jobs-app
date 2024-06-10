import { Meta, StoryFn } from "@storybook/react";

import { Loading } from "./Loading";

const meta: Meta = {
  title: "Components/Loading",
  component: Loading,
};

export default meta;

const Template: StoryFn = (args) => <Loading {...args} />;

export const Default = Template.bind({});
