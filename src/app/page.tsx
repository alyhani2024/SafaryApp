
import { Metadata } from "next";
import { Providers } from "./providers";
import SigninPage from "@/components/signin/page";
import SignupPage from "@/components/signup/page";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Safary",
  description: "Tour Guide Application",
  // other metadata
};

  function Home() {
  return (
    <>
      <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black `}>
        <Providers>
          { true ? ( 
            <SigninPage />
          ) : ( 
            <SignupPage />
          )}
        </Providers>
      </body>
    </html>
    </>
  );
}

export default Home