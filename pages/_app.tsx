import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import Header from "../components/Header/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
