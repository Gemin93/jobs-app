// import { Request } from "msw";

import { IS_TEST } from "@/config/constants";
import { AuthUser } from "@/features/auth";

import { testData } from "../test-data";

import { db } from "./db";

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

export const AUTH_COOKIE = "auth_token";

const sanitizeUser = (user: any): AuthUser => {
  const sanitizeUser = { ...user };
  delete sanitizeUser.password;
  return sanitizeUser;
};

export const getUser = () => {
  sanitizeUser(testData.users[0]);
};

// returns the user object and auth token if the provided credentials are valid

export const authenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user?.password === password) {
    const sanitizedUser = sanitizeUser(user);
    const encodeToken = AUTH_TOKEN;
    return { user: sanitizedUser, jwt: encodeToken };
  }

  throw new Error("Invalid username or password");
};

// extract the token and return the user if exists

export const requireAuth = ({
  req,
  shouldThrow = true,
}: {
  req: Request;
  shouldThrow?: boolean;
}) => {
  if (IS_TEST) {
    return getUser();
  } else {
    const cokies = req.headers.get("cookie");
    const encodedToken = cokies
      ?.split("; ")
      .find((cookie) => cookie.startsWith(`${AUTH_COOKIE}=`))
      ?.split("=")[1];

    if (encodedToken !== AUTH_TOKEN) {
      if (shouldThrow) {
        throw new Error("No authorization token provided!");
      }
      return null;
    }
    return getUser();
  }
};
