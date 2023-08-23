import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import UploadModal from "./UploadModal";
import { useState } from "react";

function UserInformationSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="userInfo-sec">
      <div className="userProfile-header">
        <span>
          <a href="/FullHomepage"><FontAwesomeIcon icon={faLongArrowAltLeft} /> Go back to Home</a>
        </span>
      </div>
      <div className="userProfile-mainSection">
        <div className="userProfile-infoSection">
          <div className="userInfo-1">
            <h2>Personal information</h2>
            <span>First name : Gelila</span>
            <hr />
            <span>Last name : Sisay</span>
            <hr />
            <span>Email : LilaSis23@gmail.com</span>
            <hr />
            <div className="password-sec">
              <span>Password : ************</span>
              <button>change password</button>
            </div>
          </div>
          <div className="userInfo-2">
            <h2>Address information</h2>
            <span>City : Addis Ababa</span>
            <hr />
            <span>Subcity : Lideta</span>
            <hr />
            <span>Woreda : Dunno</span>
            <hr />
            <span>SSN : 329569-3455</span>
          </div>
          <div className="userProfile-editBtn">
            <button onClick={() => setModalIsOpen(true)}>Edit</button>
            <UploadModal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <div className="personal-info-edit">
                <div className="personalInfo-closeBtn">
                  <h2>User Information</h2>
                  <button onClick={closeModal}>
                    <FontAwesomeIcon icon={faClose} size="2x" />
                  </button>
                </div>
                <div className="personal-info-edit-1">
                  <h2>Personal information</h2>
                  <div className="personal-infoPartOne">
                    <div>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div>
                      <input type="text" placeholder="Last name" />
                    </div>
                    <div>
                      <input type="text" placeholder="Email" />
                    </div>
                    <div>
                      <input type="text" placeholder="Password" />
                    </div>
                    <div>
                      <input type="text" placeholder="Comfirm password" />
                    </div>
                  </div>
                </div>
                <div className="address-info-edit">
                  <h2>Address information</h2>
                  <div className="personal-infoPartTwo">
                    <div>
                      <input type="text" placeholder="City" />
                    </div>
                    <div>
                      <input type="text" placeholder="Subcity" />
                    </div>
                    <div>
                      <input type="text" placeholder="Woreda" />
                    </div>
                    <div>
                      <input type="text" placeholder="SSN" />
                    </div>
                  </div>
                </div>
                <div className="infoEdit-btns">
                  <button>Save</button>
                  <button>Cancel</button>
                </div>
              </div>
            </UploadModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformationSection;
