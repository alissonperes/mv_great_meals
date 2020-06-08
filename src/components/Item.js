import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentCategory, getRecipes, getRecipe } from '../actions/index';
import './Item.css';

const Item = props => {
  const { recipe, getClickedRecipe } = props;
  const { fetched, fetching, error } = recipe;
  const { match } = props;
  const { id } = match.params;
  const [displayRecipe, setDisplayRecipe] = useState([]);

  useEffect(() => {
    if (!fetched && !fetching && error === null) {
      getClickedRecipe(id);
    } else if (fetching) {
      setDisplayRecipe(
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>,
      );
    } else if (fetched) {
      const instructions = recipe.recipe.strInstructions.split(/(?:\r\n|\r|\n)/g);
      setDisplayRecipe(
        <div className="item-container">
          <div>
            <img
              className="item-image"
              src={recipe.recipe.strMealThumb}
              alt={recipe.recipe.strMeal}
            />
          </div>
          <div className="item-instructions">
            <h1 className="item-header">{recipe.recipe.strMeal}</h1>
            <code className="item-instructions">
              {instructions.map((x, i) => (
                <p key={`${(x, i)}`}>{x}</p>
              ))}
            </code>
            <a href={recipe.recipe.strYoutube} target="_blank" rel="noopener noreferrer">
              <span>Youtube | </span>
            </a>
            <a href={recipe.recipe.strSource} target="_blank" rel="noopener noreferrer">
              <span>Source</span>
            </a>
          </div>
        </div>,
      );
    }
  }, [recipe, fetched, fetching, error, id, getClickedRecipe]);

  return <div>{displayRecipe}</div>;
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
  match: PropTypes.shape().isRequired,
  recipe: PropTypes.shape().isRequired,
  getClickedRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
