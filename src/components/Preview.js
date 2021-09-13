import React, { useContext } from "react";
import CollectionItemPreview from "./common/CollectionItemPreview";
import CollectionPreview from "./context/CollectionItemPreviewContext";

function Preview(props) {
  const preview = useContext(CollectionPreview);
  // console.log(preview, "p");
  if (!preview.collection) {
    return "";
  }
  return (
    <div>
      <CollectionItemPreview data={preview.collection} />
    </div>
  );
}

export default Preview;
