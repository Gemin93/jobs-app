"use client";
import { Button } from "@/components/Button/Button";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { InputField } from "@/components/InputField/InputField";

const LandingPage = () => {
  return (
    <>
      <Button variant="solid" type="button">
        Click me
      </Button>
      <br />
      <InputField label="Name"></InputField>
      <br />
      <CustomLink href="/">Home</CustomLink>
    </>
  );
};
export default LandingPage;
