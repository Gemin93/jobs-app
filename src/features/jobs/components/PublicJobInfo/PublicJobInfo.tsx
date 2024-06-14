import { ViewIcon } from "@chakra-ui/icons";
import { Heading, HStack, VStack, Text } from "@chakra-ui/react";

import { Content } from "@/components/Content/Content";
import { CustomLink } from "@/components/CustomLink/CustomLink";

import { Job } from "../../types/types";

export const PublicJobInfo = ({ job }: { job: Job }) => {
  return (
    <>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{job?.position}</Heading>
        <HStack spacing="12">
          <Text>{job?.department}</Text>
          <Text>{job?.location}</Text>
        </HStack>
        <CustomLink
          href={`/organizations/${job?.organizationId}`}
          variant="outline"
          icon={<ViewIcon />}
        >
          View more jobs
        </CustomLink>
      </VStack>
      <Content>{job.info}</Content>
    </>
  );
};
