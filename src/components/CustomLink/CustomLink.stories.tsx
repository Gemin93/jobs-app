import { Meta, StoryFn } from "@storybook/react";
import { CustomLink, CustomLinkProps } from "./CustomLink";

const meta: Meta = {
  title: "Components/CustomLink",
  component: CustomLink,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<CustomLinkProps> = (args) => <CustomLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "/",
  children: "Click Me",
};
