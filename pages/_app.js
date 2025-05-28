import "@/styles/globals.css";
import Header from "./components/structure/Header/Header";
import Footer from "./components/structure/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
