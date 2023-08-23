import usedHills from "../../assets/images/usedHills.jpeg";
import usedShoe from "../../assets/images/usedShoe.jpeg";
import usedBottle from "../../assets/images/usedBottles.jpeg";
import usedTv from "../../assets/images/usedTv.jpeg";
function UserItems() {
  return (
    <div className="userProfile-itemList">
      <div className="user-item1 user-items">
        <img src={usedHills} about="user items" />
      </div>
      <div className="user-item2 user-items">
        <img src={usedTv} about="user items" />
      </div>
      <div className="user-item3 user-items">
        <img src={usedShoe} about="user items" />
      </div>
      <div className="user-item4 user-items">
        <img src={usedBottle} about="user items" />
      </div>
    </div>
  );
}

export default UserItems;
