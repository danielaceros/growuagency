import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import niceSelect from "react-nice-select";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      niceSelect();
    }, 500);
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title */}
        <title>GrowUAgency® - The SMMA Agency</title>
        {/* Favicon Icon */}
        <link
          rel="shortcut icon"
          href="assets/images/logos/gc.png"
          type="image/x-icon"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Flaticon */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />ç
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
              !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/5c66f57b3b904f157fa58f48c/a42f1325c5cc6215950c78662.js");
            `,
          }}
        />
      </Head>
      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  );
}
