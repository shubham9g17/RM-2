import React from "react";
import CollectionItem from "./CollectionItem";

function Collection({ data, name }) {
  return (
    <div>
      {name}
      <div className="row">
        {data.map((d, index) => (
          <div className="col" key={index}>
            <CollectionItem />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
