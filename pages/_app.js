import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { GlobalProvider } from '../context/GlobalContext';
import { Navbar, Footer } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [user] = useAuthState();
  // This will handle the auth flow with firebase

  return (
    <GlobalProvider>
      <ThemeProvider attribute="class">
        <div className="dark:bg-w-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <Script
          src="https://kit.fontawesome.com/8a40a6fca5.js"
          crossOrigin="anonymous"
        />
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default MyApp;
