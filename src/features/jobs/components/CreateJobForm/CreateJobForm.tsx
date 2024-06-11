import { Box, Stack } from "@chakra-ui/react";

import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/InputField/InputField";
import { on } from "events";

export type CreateJobFormProps = {
  onSuccess: () => void;
};

export const CreateJobForm = ({ onSuccess }: CreateJobFormProps) => {
  const onSubmit = async () => {
    onSuccess();
  };

  return (
    <Box w="full">
      <Stack as="form" onSubmit={() => onSubmit()} w="full" spacing="8">
        <InputField label="Position" />
        <InputField label="Department" />
        <InputField label="Location" />

        <InputField type="textarea" label="Info" />

        <Button isDisabled={false} isLoading={false} type="submit">
          Create
        </Button>
      </Stack>
    </Box>
  );
};
