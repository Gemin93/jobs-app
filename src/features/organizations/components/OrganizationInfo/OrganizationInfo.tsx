import { Heading, Stack } from "@chakra-ui/react";

import { Content } from "@/components/Content/Content";
import { InfoCard } from "@/components/InfoCard/InfoCard";

import { Organization } from "../../types/types";

export const OrganizationInfo = ({
  organization,
}: {
  organization: Organization;
}) => {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Heading>{organization?.name}</Heading>
        <Stack
          w={{ base: "full", md: "auto" }}
          direction={{ base: "column", md: "row" }}
        >
          <InfoCard label="Email" value={organization.email} />
          <InfoCard label="Phone Number" value={organization.phone} />
        </Stack>
      </Stack>

      <Content>{organization.info}</Content>
    </>
  );
};
