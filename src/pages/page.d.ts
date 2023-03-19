// This is file allows us to set a default layout for a page. This is useful for pages that are not wrapped in a layout component.

// We can also take in a layout as a argument to the page component. This is useful for pages that are wrapped in a layout component.

import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

// Defines the NextPageWithLayout type
export type NextPageWithLayout<P = { threads }> = NextPage<P> & {
  // The getLayout function wraps a page component with a layout component
  getLayout?: (_page: ReactElement) => ReactNode;
  // The layout property specifies which layout component to use
  layout?: ComponentType;
};
