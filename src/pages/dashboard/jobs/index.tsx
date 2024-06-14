import { PlusSquareIcon } from "@chakra-ui/icons";
import { Heading, HStack } from "@chakra-ui/react";
import { ReactElement } from "react";

import { CustomLink } from "@/components/CustomLink/CustomLink";
import { Loading } from "@/components/Loading/Loading";
import { Seo } from "@/components/Seo/Seo";
import { JobsList } from "@/features/jobs";

import { DashboardLayout } from "@/layouts/DashboardLayout";
import { useJobs, useUser } from "@/testing/test-data";

const DashboardJobsPage = () => {
  const user = useUser();
  const jobs = useJobs(user.data?.organizationId ?? "");

  if (jobs.isLoading) return <Loading />;

  if (!user.data) return null;

  return (
    <>
      <Seo title="Jobs" />
      <HStack mb="8" align="center" justify="space-between">
        <Heading>Jobs</Heading>
        <CustomLink
          href="/dashboard/jobs/create"
          variant="solid"
          icon={<PlusSquareIcon />}
        >
          Create Job
        </CustomLink>
      </HStack>
      <JobsList
        jobs={jobs.data || []}
        isLoading={jobs.isLoading}
        organizationId={user.data.organizationId}
        type="dashboard"
      />
    </>
  );
};

DashboardJobsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardJobsPage;
