function UserTransactionTable({ userTransaction }) {
  return (
    <table className="userTransaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Sold</th>
          <th>Sold to</th>
          <th>Bought</th>
          <th>Date</th>
          <th>Used delivery</th>
        </tr>
      </thead>
      <tbody>
        {userTransaction.map(
          ({ id, sold, sold_to, bought, date, used_delivery }) => (
            <tr key={`userTransaction-${id}`}>
              <td>{id}</td>
              <td>{sold}</td>
              <td>{sold_to}</td>
              <td>{bought}</td>
              <td>{date}</td>
              <td>{used_delivery}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default UserTransactionTable;
