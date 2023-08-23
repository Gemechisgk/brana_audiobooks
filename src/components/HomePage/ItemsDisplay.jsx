import { useState } from "react";
import UploadModal from "./UploadModal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import phone from "../../assets/images/99.jpg";
import { Link } from "react-router-dom";
import Upload from "./Upload";

function ItemsDisplay({ items }) {
  const itemDetail = [
    {
      id: 1,
      image: `${phone}`,
      brand: "LG",
      model: "23GT-23LG",
      quantity: "1",
      estimatedValue: "12,300",
      usage: "1.2yr",
      defects: "Broken glass",
      region: "Adama",
      city: "Adama",
      subCity: "dunno",
      areaName: "18",
      itemsWillingToAccept:
        "any kind of touch mobile phone and may be smart watch",
    },
  ];

  const [viewIsOpen, setViewIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [tradeIsOpen, setTradeIsOpen] = useState(false);

  const openViewModal = () => {
    setViewIsOpen(!viewIsOpen);
  };

  const openContactModal = () => {
    setContactIsOpen(!contactIsOpen);
  };

  const toggleTradeModal = () => {
    setTradeIsOpen(!tradeIsOpen);
  };

  const closeModal = () => setViewIsOpen(false);
  const closeModal2 = () => {
    setContactIsOpen(false);
  };
  const closeTradeModal = () => {
    setTradeIsOpen(false);
  };

  return (
    <>
      {items.map(({ id, type, name, status, returns, image }) => (
        <div className="section2-card" key={`list-item-${id}`}>
          <div className="section1-card-top section2-card-top ">
            <div className="card-top-text">
              <ul>
                <li>
                  <h2>{name}</h2>
                  <p>
                    <strong>Item type: </strong>
                    {type}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {status}
                  </p>
                  <p>
                    <strong>Items in return: </strong>
                    {returns}
                  </p>
                </li>
              </ul>
            </div>
            <div className="section1-card-bottom">
              <button className="card-bottom-btn" onClick={openViewModal}>
                View
              </button>
              <UploadModal onRequestClose={closeModal} isOpen={viewIsOpen}>
                {itemDetail.map(
                  ({
                    id,
                    image,
                    brand,
                    model,
                    quantity,
                    estimatedValue,
                    usage,
                    defects,
                    region,
                    city,
                    subCity,
                    areaName,
                    itemsWillingToAccept,
                  }) => (
                    <div key={`veiewItem - ${id}`} className="viewModal">
                      <div className="viewModal-top">
                        <span>Jermey Oceans</span>
                        <button onClick={closeModal}>
                          <FontAwesomeIcon
                            icon={faClose}
                            className="viewModalClose"
                            size="2x"
                          />
                        </button>
                      </div>
                      <div className="viewModal-img">
                        <img src={image} alt="item picture" />
                      </div>
                      <div className="viewModal-itemDetails viewModal-details">
                        <h2>Item detail</h2>
                        <span>Item brand: {brand} </span>
                        <span>Model Type: {model} </span>
                        <span>Item quantity: {quantity} </span>
                        <span>Estimated value: {estimatedValue} </span>
                        <span>Duration of usage: {usage}</span>
                        <span>Defects of item: {defects}</span>
                      </div>
                      <div className="viewModal-LocationDetails  viewModal-details">
                        <h2>Location details</h2>
                        <span>Region: {region} </span>
                        <span>City/Zone: {city} </span>
                        <span>Subcity/Woreda: {subCity} </span>
                        <span>Specific area name: {areaName} </span>
                        <span>
                          Items willing to accept: {itemsWillingToAccept}
                        </span>
                      </div>
                      <div className="viewModal-btns">
                        <button onClick={toggleTradeModal}>Trade</button>
                        {tradeIsOpen && (
                          <div className="tradeModal">
                            <div className="tradeModal-closeBtn">
                              <FontAwesomeIcon
                                icon={faClose}
                                onClick={closeTradeModal}
                              />
                            </div>
                            <span>
                              Do you want to upload now or use already uploaded
                              items?
                            </span>
                            <div className="tradeModal-inside">
                              <button>
                                <Upload />
                              </button>
                              <button>
                                <Link to="/profilepage">Go to profile</Link>
                              </button>
                            </div>
                          </div>
                        )}
                        <button>Contact</button>
                      </div>
                    </div>
                  )
                )}
              </UploadModal>
              <button className="card-bottom-btn" onClick={openContactModal}>
                Contact
              </button>
              <UploadModal
                onRequestClose={closeModal2}
                isOpen={contactIsOpen}
              ></UploadModal>
            </div>
          </div>
          <div className="card-top-img section2-img">
            <img src={image} alt="Google Logo" />
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemsDisplay;
