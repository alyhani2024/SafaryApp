import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import UserTable from "@/components/Table/AdminTable";
import React from "react";

const Adminpage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName=" dashboard"
        description=" Table Of All Users For All Data make Cruds ( Add , Edit and Update ) ."
      />
      <UserTable />
      <br />
    </>
  );
};

export default Adminpage;
