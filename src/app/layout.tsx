"use client";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import 'node_modules/react-modal-video/css/modal-video.css';
import '../styles/index.css';
import { Providers } from "./providers";
import SigninPage from '@/components/signin/page';
import SignupPage from '@/components/signup/page'; // Import the sign-up page component


const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children , isAuthenticat}: { children: React.ReactNode ,isAuthenticat:boolean }) => {
  const [authenticated, setAuthenticated] = useState(isAuthenticat);
  const [hasAccount, setHasAccount] = useState(false); // Track if the user has an account

  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    setAuthenticated(isAuthenticated);

    // Check if user has an account when component mounts
    const accountExists = checkAccount();
    setHasAccount(accountExists);
  }, []);

  const checkAuthentication = () => {
    // Check if user is authenticated (e.g., check localStorage)
    const user = localStorage.getItem('user');
    return !!user; // Return true if user is found, false otherwise
  };

  const checkAccount = () => {
    // Check if user has an account (e.g., check localStorage or database)
    const user = localStorage.getItem('user');
    return !!user; // Return true if user data is found, false otherwise
  };

  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {true  ? (
            <>
              <Header />
              {children}
              <Footer />
            </>
          ) : hasAccount ? ( // If user has an account, show the sign-in page
            <SigninPage />
          ) : ( // Otherwise, show the sign-up page
            <SignupPage />
          )}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
