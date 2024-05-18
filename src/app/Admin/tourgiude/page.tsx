import Breadcrumb from "@/components/Common/Breadcrumb";
import UserApiTable from "@/components/Table/UserApi";
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <UserApiTable />
    </>
  );
};

export default TourGiude;
