import { Meta, StoryFn } from "@storybook/react";
import { Content, ContentProps } from "./Content";

const meta: Meta = {
  title: "Components/Content",
  component: Content,
};

export default meta;

const Template: StoryFn<ContentProps> = (args) => <Content {...args} />;

export const Default = Template.bind({});

Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis eos necessitatibus adipisci, molestiae maxime rem temporibus. Et iste modi vitae porro non? Culpa temporibus tempora mollitia provident expedita perspiciatis!",
};
