import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { request } from "graphql-request";
import "../styles/globals.css";

const fetcher = (query, variables) => request("/api/graphql", query, variables);

export default function App({ Component, pageProps: { session, fallback, ...pageProps } }) {
  console.log("_app", { fallback });
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          refreshInterval: 30000,
          fetcher,        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
}
