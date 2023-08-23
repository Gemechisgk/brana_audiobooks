import React from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";
import SearchBar from "./SearchBar";
import AdminDeliveryRequest from "./AdminDeliveryRequest";
import ManageAccount from "./ManageAccount";
function AdminPage() {
  return (
    <div className="adminPage-root">
      <Sidebar />
      <SearchBar />
    </div>
  );
}

export default AdminPage;
