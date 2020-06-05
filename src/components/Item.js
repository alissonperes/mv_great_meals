import React from "react";
import { connect } from "react-redux";
import { updateCurrentCategory, getRecipes, getRecipe } from "../actions/index";
import "./Item.css";

const Item = props => {
  const instructions = props.recipe.recipe.strInstructions.split(
    /(?:\r\n|\r|\n)/g
  );
  return (
    <div className="item-container">
      <div>
        <img
          className="item-image"
          src={props.recipe.recipe.strMealThumb}
          alt={props.recipe.recipe.strMeal}
        />
      </div>
      <div className="item-instructions">
        <h1 className="item-header">{props.recipe.recipe.strMeal}</h1>
        <code className="item-instructions">
          {instructions.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        </code>
        <a
          href={props.recipe.recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Youtube | </span>
        </a>
        <a
          href={props.recipe.recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Source</span>
        </a>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);
