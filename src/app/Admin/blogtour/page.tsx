import Breadcrumb from "@/components/Common/Breadcrumb";
import BlogTourTable from "@/components/Table/BlogTourTable";
import ToursitTable from "@/components/Table/TouristTable";
import UserApiTable from "@/components/Table/UserApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Giude Page | Tourrist Template for Tourism ",
  description: "This is Tourhour Page for BlogTour Template",
  // other metadata
};

const BlogTour = () => {
  return (
    <>
      <Breadcrumb
        pageName="TourGiude Section"
        description=" Table Of BlogTour Users For All Data make Cruds ( Add , Edit and Update ) ."
      />
      <BlogTourTable />
    </>
  );
};

export default BlogTour;
