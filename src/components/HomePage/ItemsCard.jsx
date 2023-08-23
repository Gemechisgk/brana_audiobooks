// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ItemsCard() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3001/items');
//         setItems(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {items.map((item) => (
//         <div className="section1-card" key={item._id}>
//           <div className="section1-card-top">
//             <div className="card-top-text">
//               <h2>{item.brandName} {item.modelType}</h2>
//               <span>{item.itemDefects}</span>
//             </div>
//             <div className="section1-card-bottom">
//               <button className="card-bottom-btn">Trade</button>
//               <button className="card-bottom-btn">Contact</button>
//             </div>
//           </div>
//           <div className="card-top-img">
//             <img
//               src={item.imageUrl}
//               alt={item.brandName}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ItemsCard;
function ItemsCard() {
  return (
    <div className="section1-card">
      <div className="section1-card-top">
        <div className="card-top-text">
          <h2>Asus laptop</h2>
          <span>
            Body Medium Lorem ipsum dolor sit amet consectetur cambuur.
          </span>
        </div>
        <div className="section1-card-bottom">
          <button className="card-bottom-btn">Trade</button>
          <button className="card-bottom-btn">Contact</button>
        </div>
      </div>
      <div className="card-top-img">
        <img
          src="https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Google Logo"
        />
      </div>
    </div>
  );
}

export default ItemsCard;
