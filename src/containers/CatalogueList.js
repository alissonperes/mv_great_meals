import React from "react";
import { connect } from "react-redux";
import {
  updateCategories,
  updateCurrentCategory,
  getRecipes,
  clearRecipe
} from "../actions/index";
import "./CatalogueList.css";

const CatalogueList = props => {
  if (
    !props.categories.fetched &&
    !props.categories.fetching &&
    props.categories.error === null
  ) {
    props.getCategories();
  }

  const handleChangeCategory = e => {
    props.updateCategory(e.target.innerText);
    props.getCurrentRecipes(e.target.innerText);
    props.clearRecipe();
  };

  const listCategories = props.categories.categories.map(x => {
    const currentCategory =
      x.strCategory !== props.category ? "list-item" : "active list-item";

    return (
      <li
        className={currentCategory}
        key={x.strCategory}
        onClick={handleChangeCategory}
      >
        {x.strCategory}
      </li>
    );
  });

  return (
    <div className="header-container">
      <ul className="header-list">{listCategories}</ul>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    category: store.category,
    categories: store.categories,
    store: store
  };
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(updateCategories()),
  updateCategory: category => dispatch(updateCurrentCategory(category)),
  getCurrentRecipes: category => dispatch(getRecipes(category)),
  clearRecipe: () => dispatch(clearRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueList);
