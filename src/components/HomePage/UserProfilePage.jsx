import "./UserProfilePage.css";
import UserInformationSection from "./UserInformationSection";
import UserItems from "./UserItems";
import UserProfileSide from "./UserProfileSide";
import UserTransactionTable from "./UserTransactionTable";

function UserProfilePage() {
  const userTransaction = [
    {
      id: 1,
      sold: "Phone",
      sold_to: "Alem zayd",
      bought: "Tablet",
      date: "12 - 22 - 2012",
      used_delivery: "No",
    },
    {
      id: 2,
      sold: "Tv",
      sold_to: "Yoseph detebo",
      bought: "Tv stand",
      date: "12 - 22 - 2012",
      used_delivery: "Yes",
    },
    {
      id: 3,
      sold: "Motor cycle",
      sold_to: "Amanuel sitot",
      bought: "TV",
      date: "12 - 22 - 2012",
      used_delivery: "Yes",
    },
    {
      id: 4,
      sold: "Phone",
      sold_to: "Alem zayd",
      bought: "Tablet",
      date: "12 - 22 - 2012",
      used_delivery: "No",
    },
    {
      id: 5,
      sold: "Tv",
      sold_to: "Alemu solomon",
      bought: "Blender",
      date: "12 - 22 - 2012",
      used_delivery: "Yes",
    },
  ];
  return (
    <div className="userProfile-root">
      <UserProfileSide />
      <main className="userProfile-main">
        <UserInformationSection />
        <div className="main-itemsList">
          <h2 className="mainItems-header">Uploaded items</h2>
          <UserItems />
          <div className="userTransaction-sec">
            <h2>Transaction History</h2>
            <UserTransactionTable userTransaction={userTransaction} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserProfilePage;
