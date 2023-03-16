import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import type { NextPageWithLayout } from "./_app";
import { NextPageWithLayout } from "./page";
import PrimaryLayout from "./components/layouts/PrimaryLayout";
// import type { AppProps } from "next/app";

// import { PageWithLayout } from "../types/NextExtensions";
// import { NextPageWithLayout } from "./page";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={session}>
      {/* <PrimaryLayout> */}
      <Component {...pageProps} />
      {/* </PrimaryLayout> */}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
