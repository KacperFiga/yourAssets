import "../styles/globals.css";
import type { AppProps } from "next/app";

const style = {
  backgroundImage: "url('../public/background.svg')",
  minHeight: "100vh",
  backgroundColor: "DodgerBlue",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} style={style} />;
}
