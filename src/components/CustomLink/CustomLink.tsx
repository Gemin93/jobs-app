import { Button } from "@chakra-ui/react";
import { color } from "framer-motion";
import { link } from "fs";
import Link from "next/link";
import { ReactNode } from "react";

const variants = {
  link: {
    variant: "link",
    color: "primary",
  },
  solid: {
    variant: "solid",
    color: "primaryAccent",
    bg: "primary",
    _hover: {
      opacity: 0.9,
    },
  },
  outline: {
    variant: "outline",
    color: "primary",
    bg: "white",
  },
};

export type CustomLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const CustomLink = ({
  href,
  children,
  variant = "link",
  icon,
  shallow = false,
}: CustomLinkProps) => {
  return (
    <Link shallow={shallow} href={href} passHref>
      <Button leftIcon={icon} as="a" {...variants[variant]}>
        {children}
      </Button>
    </Link>
  );
};
