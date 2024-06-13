import { CustomLink } from "@/components/CustomLink/CustomLink";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { CustomInspectFunction } from "util";

type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <Box maxW="container.lg" mx="auto" h="full">
      <Box minH="80%" mx="4">
        {children}
      </Box>
      <Box py="8" textAlign="center">
        Powered by <CustomLink href="/">Jobs App</CustomLink>
      </Box>
    </Box>
  );
};
