import React from "react";
import { connect } from "react-redux";
import CatalogueItems from "../containers/CatalogueItems";
import Item from "./Item";
import { updateCurrentCategory, getRecipes, getRecipe } from "../actions/index";

const Catalogue = props => {
  const setRecipe = e => {
    props.getClickedRecipe(e);
    console.log(props);
  };

  return (
    <div>
      {props.recipe.recipe ? (
        <Item />
      ) : (
        <CatalogueItems setRecipe={setRecipe} />
      )}
    </div>
  );
};

const mapStateToProps = store => {
  return {
    category: store.category,
    categories: store.categories,
    categoriesFetched: store.categories.fetched,
    recipe: store.displayedRecipe
  };
};

const mapDispatchToProps = dispatch => ({
  updateCategory: category => dispatch(updateCurrentCategory(category)),
  getCurrentRecipes: category => dispatch(getRecipes(category)),
  getClickedRecipe: recipe => dispatch(getRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
