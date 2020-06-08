import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes, getRecipe } from '../actions/index';

import './CatalogueItems.css';

const CatalogueItems = props => {
  const {
    recipes, getRecipes, category, getClickedRecipe,
  } = props;
  const { fetched, fetching, error } = recipes;
  const [recipeItems, setRecipeItems] = useState();
  useEffect(() => {
    const setRecipe = e => {
      getClickedRecipe(e);
    };

    if (!fetched && !fetching && error === null) {
      getRecipes(category);
    } else if (fetching) {
      setRecipeItems(
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
      // <Link to="/" onClick={() => setRecipe(x.idMeal)} key={x.idMeal}>
    } else if (fetched) {
      setRecipeItems(
        recipes.recipes.map(x => (
          <Link to={`/item/${x.idMeal}`} onClick={() => setRecipe(x.idMeal)} key={x.idMeal}>
            <div className="recipe-item">
              <div className="item-name">
                <p className="item-text">{x.strMeal}</p>
              </div>
              <img src={x.strMealThumb} alt={x.strMeal} />
            </div>
          </Link>
        )),
      );
    }
  }, [recipes, getRecipes, category, getClickedRecipe, error, fetched, fetching]);

  return <div className="recipes-container">{recipeItems}</div>;
};

const mapStateToProps = store => ({
  category: store.category,
  recipes: store.recipes,
  store,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: category => dispatch(getRecipes(category)),
  getClickedRecipe: recipe => dispatch(getRecipe(recipe)),
});

CatalogueItems.defaultProps = {};

CatalogueItems.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  recipes: PropTypes.shape().isRequired,
  getClickedRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
