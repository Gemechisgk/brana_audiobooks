import { faEdit, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import UploadModal from "../HomePage/UploadModal";
import EditAgentModal from "./EditAgentModal";
import DeleteAgentModal from "./DeleteAgentModal";

function ManageAccount() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe14@gmail.com.com" },
    { id: 2, name: "Biniyam Zeleke", email: "binizele18@gmail.com" },
  ]);

  const [agents, setAgents] = useState([
    { id: 1, name: "Agent 1", email: "agent1@example.com" },
    { id: 2, name: "Agent 2", email: "agent2@example.com" },
  ]);

  const [activeTab, setActiveTab] = useState("users");
  const [isOpen, setIsOpen] = useState(false);

  function openCreateAgent() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleDeleteAgent = (agentId) => {
    setAgents((prevAgents) =>
      prevAgents.filter((agent) => agent.id !== agentId)
    );
  };

  return (
    <div className="manageAccount-root">
      <Sidebar />
      <SearchBar />
      <div className="manage-accounts-main">
        <div className="most-exchange dashboard-card">
          <h3>Manage accounts</h3>
          <div className="time">
            <span>September 12,2022 12:35 PM</span>
          </div>
        </div>
        <div className="manage-acc-table-btn">
          <button onClick={() => handleTabClick("users")}>Users</button>
          <button onClick={() => handleTabClick("agents")}>Agents</button>
        </div>
        {activeTab === "users" && (
          <div className="user-acc-section">
            <div className="manage-acc-mid">
              <select>
                <option value="">Filter</option>
                <option value="data-of-reg">Date of registration</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="latest-arrival">Latest arrival</option>
              </select>
            </div>
            <table className="manage-account-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="manage-acc-inside-btns">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="edit-delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "agents" && (
          <div className="agent-acc-section">
            <div className="manage-acc-mid">
              <select>
                <option value="">Filter</option>
                <option value="data-of-reg">Date of registration</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="latest-arrival">Latest arrival</option>
              </select>
              <div className="create-agent">
                <button>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    onClick={openCreateAgent}
                  />
                </button>
                <UploadModal onRequestClose={closeModal} isOpen={isOpen}>
                  hey
                </UploadModal>
              </div>
            </div>
            <table className="manage-account-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr key={agent.id}>
                    <td>{agent.id}</td>
                    <td>{agent.name}</td>
                    <td>{agent.email}</td>
                    <td>
                      <div className="manage-acc-inside-btns">
                        <EditAgentModal agentId={123} />
                        <DeleteAgentModal
                          handleDeleteAgent={handleDeleteAgent}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageAccount;
