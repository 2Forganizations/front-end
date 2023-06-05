import GlobalStyle from "@/styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Navbar from "../component/commons/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <RecoilRoot>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </RecoilRoot>
      {/* </QueryClientProvider> */}
    </>
  );
}
