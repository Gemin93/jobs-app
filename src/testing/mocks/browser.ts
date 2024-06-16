import { setupWorker } from "msw/browser";

import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

// const { setupWorker } = require("msw");

// const worker = setupWorker(...handlers);

// module.exports = { worker };
