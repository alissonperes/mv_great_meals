import React from "react";
import { connect } from "react-redux";
import CatalogueList from "../containers/CatalogueList";
import CatalogueItems from "../containers/CatalogueItems";
import { updateCurrentCategory, getRecipes } from "../actions/index";

const Catalogue = props => {
  const handleChangeCategory = e => {
    props.updateCategory(e.target.innerText);
    props.getCurrentRecipes(e.target.innerText);
  };

  return (
    <div>
      <CatalogueList handleChange={handleChangeCategory} />
      <CatalogueItems />
    </div>
  );
};

const mapStateToProps = store => {
  return {
    category: store.category,
    categories: store.categories,
    categoriesFetched: store.categories.fetched,
    store: store
  };
};

const mapDispatchToProps = dispatch => ({
  updateCategory: category => dispatch(updateCurrentCategory(category)),
  getCurrentRecipes: category => dispatch(getRecipes(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
