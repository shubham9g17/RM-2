import Admin from "./components/Admin";
import Preview from "./components/Preview";
function App() {
  const collections = {
    collections1: [
      {
        connection: 1,
        name: "Api Logs",
        size: 14.5,
        files: [
          {
            name: "",
            sentDate: "",
          },
          {
            name: "",
            sentDate: "",
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
            name: "",
            sentDate: "",
          },
          {
            name: "",
            sentDate: "",
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
            name: "",
            sentDate: "",
          },
          {
            name: "",
            sentDate: "",
          },
        ],
        rows: 14000,
      },
    ],
    collections2: [
      {
        connection: 1,
        name: "Api Logs",
        size: 14.5,
        files: [
          {
            name: "",
            sentDate: "",
          },
          {
            name: "",
            sentDate: "",
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
            name: "",
            sentDate: "",
          },
          {
            name: "",
            sentDate: "",
          },
        ],
        rows: 14000,
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <Admin collections={collections} />
        </div>
        <div className="col-md-3">
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default App;
