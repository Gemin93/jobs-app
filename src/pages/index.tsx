import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { Seo } from "@/components/Seo/Seo";

const LandingPage = () => {
  return (
    <>
      <Seo title="Jobs App" />
      <Center flexDirection="column" h="full">
        <VStack maxW="3x1" spacing="8">
          <Heading size="3x1">Jobs App</Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="2xl" color="muted">
            Manage your careers pages
          </Text>
          <CustomLink href={"/dashboerds/jobs"} variant="solid">
            Get Started
          </CustomLink>
        </VStack>
      </Center>
    </>
  );
};
export default LandingPage;
