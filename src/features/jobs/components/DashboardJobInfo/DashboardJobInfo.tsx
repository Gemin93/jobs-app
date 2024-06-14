import { Heading, VStack, Text, HStack, Box } from "@chakra-ui/react";
import { Content } from "@/components/Content/Content";

import { Job } from "../../types/types";

export const DashboardJobInfo = ({ job }: { job: Job }) => {
  return (
    <VStack>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{job.position}</Heading>
        <HStack spacing="12">
          <Text>{job.department}</Text>
          <Text>{job.location}</Text>
        </HStack>
      </VStack>
      <Box w="full">
        <Content>{job.info}</Content>
      </Box>
    </VStack>
  );
};
