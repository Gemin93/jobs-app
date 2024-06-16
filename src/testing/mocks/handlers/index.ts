import { http, HttpResponse } from "msw";

import { API_URL } from "@/config/constants";

export const handlers = [
  http.get(`${API_URL}/healthcheck`, () => {
    return HttpResponse.json({ healthy: true });
  }),
];
