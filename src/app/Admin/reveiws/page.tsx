import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import TourguideReviewsTable from "@/components/Table/TourGuideReviewsTable";
import TourReviewsTable from "@/components/Table/TourReviewsTable";
import React from "react";

const Reviews = () => {
  return (
    <div>
      {" "}
      <Breadcrumb
        pageName="Tourguide Reviews Table"
        description=" Table Of All Tours For All Data make Cruds ( Add , Edit and Update )."
      />
      <TourguideReviewsTable/>
          <br />
          <br />
          <br />
      <SectionTitle
            title="Tour Reviews Table"
            paragraph="A tour guide application typically aims to provide users with information, assistance, and recommendations during their travels. Here are some main features"
            center
          />

          <TourReviewsTable/>

          <br />
          <br />
    </div>
  );
};

export default Reviews;
