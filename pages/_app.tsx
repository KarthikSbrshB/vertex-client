import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="72644675691-2lcqm6l4bkpqc3a6s3rbegma9sdmak6i.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster />
        <ReactQueryDevtools />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
