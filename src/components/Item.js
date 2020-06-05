import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentCategory, getRecipes, getRecipe } from '../actions/index';
import './Item.css';

const Item = props => {
  const { recipe } = props;
  const instructions = recipe.recipe.strInstructions.split(/(?:\r\n|\r|\n)/g);
  return (
    <div className="item-container">
      <div>
        <img className="item-image" src={recipe.recipe.strMealThumb} alt={recipe.recipe.strMeal} />
      </div>
      <div className="item-instructions">
        <h1 className="item-header">{recipe.recipe.strMeal}</h1>
        <code className="item-instructions">
          {instructions.map(x => (
            <p>{x}</p>
          ))}
        </code>
        <a href={recipe.recipe.strYoutube} target="_blank" rel="noopener noreferrer">
          <span>Youtube | </span>
        </a>
        <a href={recipe.recipe.strSource} target="_blank" rel="noopener noreferrer">
          <span>Source</span>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  recipe: store.displayedRecipe,
});

const mapDispatchToProps = dispatch => ({
  updateCategory: category => dispatch(updateCurrentCategory(category)),
  getCurrentRecipes: category => dispatch(getRecipes(category)),
  getClickedRecipe: recipe => dispatch(getRecipe(recipe)),
});

Item.defaultProps = {};

Item.propTypes = {
  recipe: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
