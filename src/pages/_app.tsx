import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextPageWithLayout } from "./page";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
// import type { AppProps } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ReactElement } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  // return getLayout(), after you fix the getLayout error
  return (
    <SessionProvider session={session}>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
