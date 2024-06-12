import { Heading, Stack } from "@chakra-ui/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";

import { NotFound } from "@/components/NotFound/NotFound";

import { JobsList, Job } from "@/features/jobs";
import { OrganizationInfo } from "@/features/organizations";

import { getJobs, getOrganization } from "@/testing/test-data";
