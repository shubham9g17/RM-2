import React, { useState } from "react";
import Collection from "./common/Collection";
import SearchBar from "./common/SearchBar";

function Admin({ collections }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h5>Admin Panel/List Of Data</h5>
      <div className="col-md-4">
        <SearchBar
          search={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {Object.keys(collections).map((collection, index) => (
        <Collection
          data={collections[collection]}
          name={collection}
          key={index}
        />
      ))}
    </div>
  );
}

export default Admin;
