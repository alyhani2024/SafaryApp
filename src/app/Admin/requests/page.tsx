import Breadcrumb from "@/components/Common/Breadcrumb";
import GuideRequest from "@/components/GuideRequests";
import TourGuideRequests from "@/components/TourGuidesRequests";
import React from "react";

const Requestpage = () => {
  return (
    <>
    <Breadcrumb
        pageName="Request Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <GuideRequest/>
      <TourGuideRequests/>
    </>
  );
};

export default Requestpage;
