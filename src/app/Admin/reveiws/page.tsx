import Breadcrumb from "@/components/Common/Breadcrumb";
import ReveiwsTable from "@/components/Table/ReviewsTable";
import React from "react";

const Reviews = () => {
  return (
    <div>
      {" "}
      <Breadcrumb
        pageName="Tour Section"
        description=" Table Of All Tours For All Data make Cruds ( Add , Edit and Update )."
      />
      <ReveiwsTable/>
    </div>
  );
};

export default Reviews;
