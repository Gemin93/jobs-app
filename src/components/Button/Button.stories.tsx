import { PlusSquareIcon } from "@chakra-ui/icons";
import { Meta, StoryFn } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Click Me",
  icon: <PlusSquareIcon />,
};
