import { IS_SERVER } from "@/config/constants";

async function initializeMocks() {
  if (IS_SERVER) {
    const { server } = await import("./server");
    server.listen();
  }
  // else {
  //   const { worker } = await import("./browser");
  //   await worker.start();
  // }
}

initializeMocks();
