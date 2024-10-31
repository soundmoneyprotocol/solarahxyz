import '@/styles/globals.css';
import React from 'react';
import App from 'next/app';

// function AppWrapper({ Component, pageProps }) {
//   return <ghost_embed Component={Component} pageProps={pageProps} />;
// }

// export default AppWrapper;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
