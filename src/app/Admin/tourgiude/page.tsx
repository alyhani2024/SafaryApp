import Breadcrumb from "@/components/Common/Breadcrumb";
import TourguideTable from "@/components/Table/TourgiudeTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Giude Page | Tourrist Template for Tourism ",
  description: "This is Tourhour Page for Tourist Template",
  // other metadata
};

const TourGiude = () => {
  return (
    <>
      <Breadcrumb
        pageName="TourGiude Section"
        description=" Table Of TourGiude All Data make Cruds ( Add,Edit and Update )."/>
      <TourguideTable />
    </>
  );
};

export default TourGiude;
