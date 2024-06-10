import { Meta, StoryFn } from "@storybook/react";
import { DataTable, DataTableProps } from "./DataTable";

import { testData } from "@/testing/test-data";

const meta: Meta = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;

const data = testData.jobs.slice(0, 6);

const columns: DataTableProps<(typeof data)[0]>["columns"] = [
  {
    title: "Position",
    field: "position",
  },
  {
    title: "Department",
    field: "department",
  },
  {
    title: "Location",
    field: "location",
  },
];

const Template: StoryFn<DataTableProps<(typeof data)[0]>> = (props) => (
  <DataTable {...props} />
);

export const Default = Template.bind({});

Default.args = {
  data,
  columns,
};
export const Empty = Template.bind({});
Empty.args = {
  data: [],
  columns,
};

export const Loading = Template.bind({});
Loading.args = { data: [], isLoading: true, columns };
