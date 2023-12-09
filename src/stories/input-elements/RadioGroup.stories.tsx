import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "components";
import { SimpleRadioGroupControlled } from "./helpers/SimpleRadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Input/RadioGroup",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: SimpleRadioGroupControlled,
};

export const Controlled: Story = {
  render: SimpleRadioGroupControlled,
};
