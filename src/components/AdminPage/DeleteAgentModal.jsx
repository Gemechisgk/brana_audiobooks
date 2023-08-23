import React, { useState } from "react";

function DeleteAgentModal({ handleDeleteAgent }) {
  const [showModal, setShowModal] = useState(false);

  const openDeleteAgent = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button className="edit-delete-btn" onClick={openDeleteAgent}>
        Delete
      </button>
      {showModal && (
        <div className="agentDeleteModal">
          <span>&times;</span>
          <span>Are you sure?</span>
          <button onClick={() => handleDeleteAgent(agent.id)}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      )}
    </>
  );
}

export default DeleteAgentModal;
