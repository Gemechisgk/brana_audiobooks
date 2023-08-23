import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

function AdminDashboard() {
  return (
    <div className="adminDashboard-root">
      <Sidebar />
      <SearchBar />
      <div className="most-exchange dashboard-card">
        <h3>Most exchanged items</h3>
        <div className="time">
          <span>September 12,2022 12:35 PM</span>
        </div>
      </div>
      <div className="dashboard-chart1"></div>
      <div className="dashboard-chart1"></div>
      <div className="most-exchange dashboard-card">
        <h3>Most exchanged items</h3>
        <div className="time">
          <span>September 12,2022 12:35 PM</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AdminDashboard;
