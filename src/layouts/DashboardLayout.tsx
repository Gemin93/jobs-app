import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Button } from "@/components/Button/Button";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { useUser } from "@/testing/test-data";

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const user = useUser();
  return (
    <Box as="section" h="100vh" overflowY="auto">
      <Navbar />
      <Container as="main" maxW="container.lg" py="12">
        {children}
      </Container>
      <Box py="8" textAlign="center">
        <CustomLink href={`/organizations/${user.data?.organizationId}`}>
          View Public Organization Page
        </CustomLink>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <CustomLink href="/" variant="solid">
              Jobs App
            </CustomLink>
            <HStack spacing="1">
              <CustomLink
                href="/dashboard/jobs"
                variant="solid"
                icon={<InfoOutlineIcon />}
              >
                Jobs
              </CustomLink>
            </HStack>
          </HStack>
          <HStack>
            <Button
              variant="outline"
              onClick={() => console.log("Logging Out...")}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
