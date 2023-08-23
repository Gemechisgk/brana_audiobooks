import UploadModal from "./UploadModal";
import Modal from "react-modal";
import { useState } from "react";
import CustomFileInput from "./CustomFileInput";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Upload() {
  const itemTypes = ["type one", "type two", "type three"];
  const itemBrands = ["Brand one", "Brand two", "Brand three"];
  const itemModels = ["Model one", "model two", "model three"];
  const itemQuantitys = [1, 2, 3];
  const itemRegions = ["Region one", "Region two", "Region three"];
  const itemCityZones = ["City Zone one", "City Zone two", "City Zone three"];
  const itemSubcityWoredas = [
    "Subcity Woreda one",
    "Subcity Woreda two",
    "Subcity Woreda three",
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);
  const [name, setName] = useState("");
  const [itemType, setItemType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [modelType, setModelType] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemEstimatedValue, setItemEstimatedValue] = useState("");
  const [itemDurationOfUsage, setItemDurationOfUsage] = useState("");
  const [itemDefects, setItemDefects] = useState("");
  const [itemRegion, setItemRegion] = useState("");
  const [itemCityZone, setItemCityZone] = useState("");
  const [itemSubcityWoreda, setItemSubcityWoreda] = useState("");
  const [itemSpecificArea, setItemSpecificArea] = useState("");
  const [itemsWillingToAccept, setItemsWillingToAccept] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const itemTypeChangeHandler = (e) => {
    setItemType(e.target.value);
  };

  const brandTypeChangeHandler = (e) => {
    setBrandName(e.target.value);
  };

  const modelTypeChangeHandler = (e) => {
    setModelType(e.target.value);
  };

  const itemQuantityChangeHandler = (e) => {
    setItemQuantity(e.target.value);
  };

  const estimatedValueChangeHandler = (e) => {
    setItemEstimatedValue(e.target.value);
  };

  const durationOfUsageChangeHandler = (e) => {
    setItemDurationOfUsage(e.target.value);
  };

  const itemDefectsChangeHandler = (e) => setItemDefects(e.target.value);
  const regionChangeHandler = (e) => setItemRegion(e.target.value);

  const cityZoneChangeHandler = (e) => setItemCityZone(e.target.value);

  function subcityWoredaChangeHandler(e) {
    setItemSubcityWoreda(e.target.value);
  }

  function specificAreaNameChangeHandler(e) {
    setItemSpecificArea(e.target.value);
  }

  const itemsWillingToAcceptChangeHandler = (e) => {
    setItemsWillingToAccept(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('itemType', itemType);
    formData.append('brandName', brandName);
    formData.append('modelType', modelType);
    formData.append('itemQuantity', itemQuantity);
    formData.append('itemEstimatedValue', itemEstimatedValue);
    formData.append('itemDurationOfUsage', itemDurationOfUsage);
    formData.append('itemDefects', itemDefects);
    formData.append('itemRegion', itemRegion);
    formData.append('itemCityZone', itemCityZone);
    formData.append('itemSubcityWoreda', itemSubcityWoreda);
    formData.append('itemSpecificArea', itemSpecificArea);
    formData.append('itemsWillingToAccept', itemsWillingToAccept);
    formData.append('itemImage', file);
  
    try {
      const response = await fetch("http://localhost:3001/submit-item", {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Item saved to MongoDB');
        closeModal();
      } else {
        console.log('Error saving item:', response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  //New Code End

  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function handleClose() {
    closeModal();
  }
  return (
    <div>
      <button id="upload-button" onClick={() => setModalIsOpen(true)}>
        <span>Upload item</span>
      </button>
      <UploadModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="modal-username-section">
          <span>User - Alex Moreno</span>
          <button className="uploadModal-close-btn" onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <hr />
        <form className="upload-form" onSubmit={formSubmitHandler}>
          <div>
            <CustomFileInput
              id="my-file-input"
              label="Choose a file"
              accept=".jpg,.jpeg,.png,.gif"
              onChange={handleFileChange}
            />
            {file && <p>Selected file: {file.name}</p>}
          </div>
          <h3>Item Details</h3>
          <div className="form-items form-text-inpts">
            <label htmlFor="estimated-value">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="form-items">
            <label htmlFor="item-type">Item Type:</label>
            <select
              name="item-type"
              id="item-type"
              value={itemType}
              onChange={itemTypeChangeHandler}
            >
              <option value=""></option>
              {itemTypes.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items">
            <label htmlFor="item-brand">Item Brand:</label>
            <select
              id="item-brand"
              name="item-brand"
              value={brandName}
              onChange={brandTypeChangeHandler}
            >
              <option value=""></option>
              {itemBrands.map((brand) => (
                <option value={brand} key={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items">
            <label htmlFor="model-type">Model Type:</label>
            <select
              name="model-type"
              id="model-type"
              value={modelType}
              onChange={modelTypeChangeHandler}
            >
              <option value=""></option>
              {itemModels.map((model) => (
                <option value={model} key={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items">
            <label htmlFor="item-quantity">Item Quantity:</label>
            <select
              name="item-quantity"
              id="item-quantity"
              value={itemQuantity}
              onChange={itemQuantityChangeHandler}
            >
              <option value=""></option>
              {itemQuantitys.map((quantity) => (
                <option value={quantity} key={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items form-text-inpts">
            <label htmlFor="estimated-value">Estimated value:</label>
            <input
              type="text"
              id="estimated-value"
              value={itemEstimatedValue}
              onChange={estimatedValueChangeHandler}
            />
          </div>
          <div className="form-items form-text-inpts">
            <label htmlFor="duration-of-usage">Duration of usage</label>
            <input
              type="text"
              id="duration-of-usage"
              value={itemDurationOfUsage}
              onChange={durationOfUsageChangeHandler}
            />
          </div>
          <div className="form-items form-textarea">
            <label htmlFor="defects-of-item">Defects of item:</label>
            <textarea
              id="defects-of-item"
              value={itemDefects}
              onChange={itemDefectsChangeHandler}
            ></textarea>
          </div>

          <h3>Location Details</h3>
          <div className="form-items">
            <label htmlFor="region">Region:</label>
            <select
              name="region"
              id="region"
              value={itemRegion}
              onChange={regionChangeHandler}
            >
              <option value=""></option>
              {itemRegions.map((region) => (
                <option value={region} key={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items">
            <label htmlFor="city-zone">City/Zone:</label>
            <select
              name="city-zone"
              id="city-zone"
              value={itemCityZone}
              onChange={cityZoneChangeHandler}
            >
              <option value=""></option>
              {itemCityZones.map((zone) => (
                <option value={zone} key={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items">
            <label htmlFor="subcity-woreda">Subcity/Woreda:</label>
            <select
              name="subcity-woreda"
              id="subcity-woreda"
              value={itemSubcityWoreda}
              onChange={subcityWoredaChangeHandler}
            >
              <option value=""></option>
              {itemSubcityWoredas.map((subcityWoreda) => (
                <option value={subcityWoreda} key={subcityWoreda}>
                  {subcityWoreda}
                </option>
              ))}
            </select>
          </div>
          <div className="form-items form-text-inpts">
            <label htmlFor="specific-area">Specific area name:</label>
            <input
              type="text"
              id="specific-area"
              name="specific-area"
              value={itemSpecificArea}
              onChange={specificAreaNameChangeHandler}
            />
          </div>
          <div className="form-items form-textarea">
            <label htmlFor="items-willing-to-accept">
              Items Willing to Accept:
            </label>
            <textarea
              id="items-willing-to-accept"
              value={itemsWillingToAccept}
              onChange={itemsWillingToAcceptChangeHandler}
            ></textarea>
          </div>
          <div className="upload-btn">
            <button>Upload</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </form>
      </UploadModal>
    </div>
  );
}

export default Upload;


