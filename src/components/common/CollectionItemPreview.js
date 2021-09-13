import React from "react";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CollectionItemPreview({ data }) {
  const collectionItem = data;
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-primary btn-lg">Upload</button>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center">
          <FontAwesomeIcon icon={faFileExcel} size="7x" />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col">
              <b>{collectionItem.name}</b>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col">Connection:</div>
            <div className="col">{collectionItem.connection}</div>
          </div>
          <div className="row">
            <div className="col ">Size:</div>
            <div className="col">{collectionItem.size}</div>
          </div>
          <div className="row">
            <div className="col ">No. of Files:</div>
            <div className="col">{collectionItem.files.length}</div>
          </div>
          <div className="row">
            <div className="col">Rows:</div>
            <div className="col">{collectionItem.rows}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <b>Data Files</b>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {collectionItem.files.map((file, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{file.name}</td>
              <td>{file.sentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollectionItemPreview;
