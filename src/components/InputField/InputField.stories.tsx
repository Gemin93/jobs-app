import { Meta, StoryFn } from "@storybook/react";
import { InputField, InputFieldProps } from "./InputField";

const meta: Meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
};

export const WithError = Template.bind({});

WithError.args = {
  label: "Name",
  error: {
    type: "required",
    message: "This field is required",
  },
};
