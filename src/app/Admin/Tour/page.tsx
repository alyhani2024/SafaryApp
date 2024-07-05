import Breadcrumb from "@/components/Common/Breadcrumb";
import TourTable from "@/components/Table/TourTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TourHour Page | Tourrist Template for Tourism ",
  description: "This is Tourhour Page for Tourist Template",
  // other metadata
};

const TourHour = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tour Section"
        description=" Table Of All Tours For All Data make Cruds ( Add , Edit and Update )."
      />
      <TourTable/>
    </>
  );
};

export default TourHour;
