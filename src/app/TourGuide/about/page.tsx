import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import HeroAbout from "@/components/About/HeroAbout";
import TeamCard from "@/components/About/TeamCard";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <HeroAbout/>
      <Breadcrumb
        pageName=" Team Of Project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <TeamCard />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
