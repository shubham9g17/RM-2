import React, { useContext } from "react";
import { faFolder, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollectionPreview from "../context/CollectionItemPreviewContext";
function CollectionItem({ data }) {
  const preview = useContext(CollectionPreview);
  return (
    <div
      className="card"
      onClick={() => {
        preview.setCollection(data);
      }}
    >
      <div className="row">
        <div className="col-4">
          <FontAwesomeIcon icon={faFolder} size="5x" />
        </div>
        <div className="col-7 text-center">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {data.files.length}files {data.size}mb
            </h6>
          </div>
        </div>
        <div className="col-1 text-end">
          <FontAwesomeIcon icon={faEllipsisV} size="1x" />
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
