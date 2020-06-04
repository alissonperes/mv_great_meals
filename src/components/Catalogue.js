import React from "react";
import CatalogueList from "../containers/CatalogueList";
import CatalogueItems from "../containers/CatalogueItems";

class Catalogue extends React.Component {
  render() {
    console.log("here");
    return (
      <div>
        <CatalogueList />
        <CatalogueItems />
      </div>
    );
  }
}

export default Catalogue;
