import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { request } from "graphql-request";

const fetcher = (query, variables) => request("/api/graphql", query, variables);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
