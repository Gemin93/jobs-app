"use client";

import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { theme } from "@/config/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
}
