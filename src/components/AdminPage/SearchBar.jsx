import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="adminSeachbar">
      <input
        type="text"
        className="admin-searchbar-input"
        placeholder="Search..."
      />
      <button className="adminsearch-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
