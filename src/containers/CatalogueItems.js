import React from "react";
import { connect } from "react-redux";
import { getRecipes, getRecipe } from "../actions/index";
import "./CatalogueItems.css";

const CatalogueItems = props => {
  if (
    !props.recipes.fetched &&
    !props.recipes.fetching &&
    props.recipes.error === null
  ) {
    props.getRecipes(props.category);
  }

  const listCategories = props.recipes.recipes.map(x => {
    return (
      <div
        className="recipe-item"
        key={x.idMeal}
        onClick={() => props.setRecipe(x.strMeal)}
      >
        <div className="item-name">
          <p className="item-text">{x.strMeal}</p>
        </div>
        <img src={x.strMealThumb} alt={x.strMeal} />
      </div>
    );
  });

  return <div className="recipes-container">{listCategories}</div>;
};

const mapStateToProps = store => {
  return {
    category: store.category,
    recipes: store.recipes,
    store: store
  };
};

const mapDispatchToProps = dispatch => ({
  getRecipes: category => dispatch(getRecipes(category)),
  getRecipe: recipe => dispatch(getRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
