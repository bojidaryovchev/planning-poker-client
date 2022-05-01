import type { AppProps } from "next/app";
import { Providers } from "../src/components/organisms/Providers";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default App;
