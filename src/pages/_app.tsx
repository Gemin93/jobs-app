import { NextPage } from "next";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import { API_MOCKING } from "@/config/constants";
import { MSWWrapperProps } from "@/lib/msw";

import { Providers } from "@/providers/providers";
import { MockProvider } from "@/providers/mockProvider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  // eslint-disable-next-line global-require
  require("@/mocks");
}

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import("@/lib/msw").then(({ MSWWrapper }) => MSWWrapper)
);

const App = ({ Component, pageProps }: AppPropWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(<Component {...pageProps} />);
  return (
    <Providers>
      <MockProvider>
        {API_MOCKING ? <MSWWrapper>{pageContent}</MSWWrapper> : pageContent}
      </MockProvider>
    </Providers>
  );
};

export default App;
