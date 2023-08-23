import React from "react";
import Modal from "react-modal";
import "./modal.css";

const UploadModal = ({ isOpen, onRequestClose, modalStyle, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upload Modal"
      style={modalStyle}
    >
      {children}
    </Modal>
  );
};

export default UploadModal;
