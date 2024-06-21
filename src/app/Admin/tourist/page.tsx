import Breadcrumb from "@/components/Common/Breadcrumb";
import ToursitTable from "@/components/Table/TouristTable";
import UserApiTable from "@/components/Table/UserApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Giude Page | Tourrist Template for Tourism ",
  description: "This is Tourhour Page for Tourist Template",
  // other metadata
};

const Tourist = () => {
  return (
    <>
      <Breadcrumb
        pageName="TourGiude Section"
        description=" Table Of Tourist Users For All Data make Cruds ( Add , Edit and Update ) ."
      />
      <ToursitTable />
    </>
  );
};

export default Tourist;
