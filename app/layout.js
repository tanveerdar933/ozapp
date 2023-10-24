import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
// Fonts
import "../styles/base/fonts/stylesheet.css";
import Header from "../Layout/Header/index";
import Footer from "../Layout/Footer/index";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oz-Ove",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Ozovein Finkey</title>
      <meta name="description" content="Ozovein Finkey" />
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ToastContainer style={{ zIndex: "9999999" }} />
        <Header />
        <main>{children}</main>
        {/* Global Footer */}
        <Footer />
        <Script
          id="bootstrap-id"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
          async
        ></Script>
      </body>
    </html>
  );
}
