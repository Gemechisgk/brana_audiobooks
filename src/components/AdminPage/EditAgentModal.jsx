import React, { useState } from "react";

const EditAgentModal = ({ agentId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditAgent = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="edit-delete-btn" onClick={handleEditAgent}>
        Edit
      </button>
      {showModal && (
        <div className="agentEditModal">
          <div className="agentEdit-modal-content">
            <span className="closeEditAgent" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Edit Agent Details</h2>
            <form>
              <h3>Personal Information</h3>
              <div>
                <label for="agentFname">First name:</label>
                <input type="text" placeholder="First Name" id="agentFname" />
              </div>
              <div>
                <label for="agentLname">Last name:</label>
                <input type="text" placeholder="Last Name" id="agentLname" />
              </div>
              <div className="agentEdit-modal-btns">
                <button>Save</button>
                <button>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditAgentModal;
