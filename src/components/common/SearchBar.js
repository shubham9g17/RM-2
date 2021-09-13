import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFolder,
  faFileExcel,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
function SearchBar({ search, onChange }) {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        value={search}
        name="search"
        onChange={onChange}
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <FontAwesomeIcon icon={faSearch} size="2x" />
    </div>
  );
}

export default SearchBar;
