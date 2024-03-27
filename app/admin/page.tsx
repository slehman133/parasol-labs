import React from "react";
import PartnershipFormTable from "../components/webforms/tables/partnershipformtable";
import GeneralFormTable from "../components/webforms/tables/generalformtable";
export async function generateMetadata() {
  return {
    title: "Admin - Parasol Labs",
  };
}

const AdminPage = () => {
  return (
    <div className="mx-auto my-auto">
      {/* <PartnershipFormTable /> */}
      <GeneralFormTable />
    </div>
  );
};

export default AdminPage;
