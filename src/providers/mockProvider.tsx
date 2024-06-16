"use client";

import { useEffect, useState } from "react";

export function MockProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mockingEnabled, setMockingEnabled] = useState(false);

  useEffect(() => {
    async function enableApMocking() {
      const { worker } = await import("../testing/mocks/browser");
      await worker.start();
      setMockingEnabled(true);
    }
    enableApMocking();
  }, []);

  if (!mockingEnabled) {
    return null;
  }

  return <>{children}</>;
}
