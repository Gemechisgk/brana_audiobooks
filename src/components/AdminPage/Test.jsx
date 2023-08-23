import React, { useState } from "react";

function Test() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  ]);

  const [agents, setAgents] = useState([
    { id: 1, name: "Agent 1", email: "agent1@example.com" },
    { id: 2, name: "Agent 2", email: "agent2@example.com" },
  ]);

  const [activeTab, setActiveTab] = useState("users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditUser = (userId) => {
    // Display modal with form to edit user details
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEditAgent = (agentId) => {
    // Display modal with form to edit agent details
  };

  const handleDeleteAgent = (agentId) => {
    setAgents((prevAgents) =>
      prevAgents.filter((agent) => agent.id !== agentId)
    );
  };

  return (
    <div>
      <h2>Manage Accounts</h2>
      <div>
        <button onClick={() => handleTabClick("users")}>Users</button>
        <button onClick={() => handleTabClick("agents")}>Agents</button>
      </div>
      {activeTab === "users" && (
        <table>
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
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {activeTab === "agents" && (
        <table>
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
                  <button onClick={() => handleEditAgent(agent.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteAgent(agent.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Test;
