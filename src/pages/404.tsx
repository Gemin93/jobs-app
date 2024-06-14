import { Center } from "@chakra-ui/react";

import { CustomLink } from "@/components/CustomLink/CustomLink";
import { NotFound } from "@/components/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <Center>
        <CustomLink href="/">Home</CustomLink>
      </Center>
    </>
  );
};

export default NotFoundPage;
