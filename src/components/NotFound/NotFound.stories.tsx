import { Meta, StoryFn } from "@storybook/react";
import { NotFound } from "./NotFound";

const meta: Meta = {
  title: "Components/NotFound",
  component: NotFound,
};

export default meta;

const Template: StoryFn = (props) => <NotFound {...props} />;

export const Default = Template.bind({});
