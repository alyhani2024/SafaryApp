import Breadcrumb from "@/components/Common/Breadcrumb";
import TourDayForm from "@/components/TourDays/TourDay";
import TourHourForm from "@/components/TourHours/tourhour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TourHour Page | Free Next.js Template for Startup and SaaS",
  description: "This is Tourhour Page for Startup Nextjs Template",
  // other metadata
};

const TourHour = () => {
  return (
    <>
       <Breadcrumb
        pageName="Tour Hour Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <TourHourForm/>
      <Breadcrumb
        pageName="Tour Day Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <TourDayForm/>

    </>
  );
};

export default TourHour;
