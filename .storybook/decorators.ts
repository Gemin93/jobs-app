import React from 'react';
import { Decorator } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

export const withChakra: Decorator = (StoryFn) => {
  return (
    <ChakraProvider>
      <StoryFn />
    </ChakraProvider>
  );
};
