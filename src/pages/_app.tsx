import Meta from "@/components/Meta";
import "@/styles/globals.scss";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
const queryClient = new QueryClient();
const manrope     = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={manrope.className}>
        <Meta></Meta>
        <ClerkProvider {...pageProps}>
          <Component {...pageProps} />
        </ClerkProvider>
      </div>
    </QueryClientProvider>
  );
}
