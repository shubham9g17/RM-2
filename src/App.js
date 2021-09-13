import Admin from "./components/Admin";
import CollectionPreview from "./components/context/CollectionItemPreviewContext";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [preview, setPreview] = useState(null);

  const collections = {
    collections1: [
      {
        connection: 1,
        name: "Api Logs",
        size: 14.5,
        files: [
          {
            name: "File1",
            sentDate: "22/03/2021",
          },
          {
            name: "File2",
            sentDate: "22/04/2021",
          },
        ],
        rows: 14000,
      },
      {
        connection: 1,
        name: "Downloads",
        size: 14.5,
        files: [
          {
            name: "File1",
            sentDate: "22/03/2021",
          },
          {
            name: "File2",
            sentDate: "22/04/2021",
          },
        ],
        rows: 14000,
      },
      {
        connection: 1,
        name: "Api Logs",
        size: 14.5,
        files: [
          {
            name: "File1",
            sentDate: "22/03/2021",
          },
          {
            name: "File2",
            sentDate: "22/04/2021",
          },
        ],
        rows: 14000,
      },
    ],
    collections2: [
      {
        connection: 1,
        name: "Downloads",
        size: 14.5,
        files: [
          {
            name: "File1",
            sentDate: "22/03/2021",
          },
          {
            name: "File2",
            sentDate: "22/04/2021",
          },
        ],
        rows: 14000,
      },
      {
        connection: 1,
        name: "Api Logs",
        size: 14.5,
        files: [
          {
            name: "File1",
            sentDate: "22/03/2021",
          },
          {
            name: "File2",
            sentDate: "22/04/2021",
          },
        ],
        rows: 14000,
      },
    ],
  };
  return (
    <div className="container">
      <CollectionPreview.Provider
        value={{ collection: preview, setCollection: setPreview }}
      >
        <div className="row">
          <div className="col-md-9">
            <Admin collections={collections} />
          </div>
          <div className="col-md-3">
            <Preview />
          </div>
        </div>
      </CollectionPreview.Provider>
    </div>
  );
}

export default App;
