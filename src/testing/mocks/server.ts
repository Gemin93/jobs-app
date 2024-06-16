import { setupServer } from "msw/node";

import { handlers } from "./handlers";

export const server = setupServer(...handlers);

// const { setupServer } = require("msw/node");

// const server = setupServer(...handlers);
