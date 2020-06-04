import React from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions/index";
import "./CatalogueItems.css";

const CatalogueItems = props => {
  if (
    !props.recipes.fetched &&
    !props.recipes.fetching &&
    props.recipes.error === null
  ) {
    props.getRecipes(props.category);
    // console.log(props.category);
  }
  const listCategories = props.recipes.recipes.map(x => {
    return (
      <div className="recipe-item" key={x.idMeal}>
        <p className="item-name">{x.strMeal}</p>
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
  getRecipes: category => dispatch(getRecipes(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
