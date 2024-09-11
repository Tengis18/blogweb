import Mainlayout from "@/components/layout/Mainlayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Mainlayout>
      <Component {...pageProps} />
    </Mainlayout>
  );
}
