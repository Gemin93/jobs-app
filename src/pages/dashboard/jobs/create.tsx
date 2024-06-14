import { useRouter } from "next/router";
import { ReactElement } from "react";

import { Heading } from "@chakra-ui/react";

import { Seo } from "@/components/Seo/Seo";
import { CreateJobForm } from "@/features/jobs";
import { DashboardLayout } from "@/layouts/DashboardLayout";

const DashboardCreateJobPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    router.push("/jobs");
  };

  return (
    <>
      <Seo title="Create Job" />
      <Heading mb="8">Create Job</Heading>
      <CreateJobForm onSuccess={onSuccess} />
    </>
  );
};

DashboardCreateJobPage.getLayout = function getLayuot(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardCreateJobPage;
