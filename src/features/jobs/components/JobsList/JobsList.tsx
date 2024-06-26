import { Box } from "@chakra-ui/react";

import { DataTable, DataTableProps } from "@/components/DataTable/DataTable";

import { CustomLink } from "@/components/CustomLink/CustomLink";

import { Job } from "../../types/types";

type JobListType = "dashboard" | "public";

export type JobsListProps = {
  type: JobListType;
  jobs: Job[];
  isLoading?: boolean;
  organizationId: string;
};

const getTableColumns = (organizationId: string, type: JobListType) => {
  const tableColumns: DataTableProps<Job>["columns"] = [
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
    {
      title: "",
      field: "id",
      render: ({ entry: { id } }) => {
        return (
          <CustomLink
            href={
              type === "public"
                ? `/organizations/${organizationId}/jobs/${id}`
                : `/dashboard/jobs/${id}`
            }
          >
            View
          </CustomLink>
        );
      },
    },
  ];

  return tableColumns;
};

export const JobsList = ({
  jobs,
  isLoading,
  organizationId,
  type,
}: JobsListProps) => {
  const tableColumns = getTableColumns(organizationId, type);

  return (
    <Box data-testid="jobs-list">
      <DataTable
        isLoading={isLoading || false}
        data={jobs}
        columns={tableColumns}
      />
    </Box>
  );
};
