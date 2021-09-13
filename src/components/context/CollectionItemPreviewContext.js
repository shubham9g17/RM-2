import React from "react";
const CollectionPreview = React.createContext({
  collection: null,
  setCollection: () => {},
});
CollectionPreview.displayName = "CollectionPreview";
export default CollectionPreview;
