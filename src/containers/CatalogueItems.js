import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes, getRecipe } from '../actions/index';

import './CatalogueItems.css';

const CatalogueItems = props => {
  const { recipes } = props;
  const { fetched, fetching, error } = recipes;

  const setRecipe = e => {
    props.getClickedRecipe(e);
  };

  if (!fetched && !fetching && error === null) {
    props.getRecipes(props.category);
  }

  const listCategories = recipes.recipes.map((x, i) => (
    <Link to="/" onClick={() => setRecipe(x.strMeal)}>
      <div className="recipe-item" key={x.idMeal} tabIndex={i}>
        <div className="item-name">
          <p className="item-text">{x.strMeal}</p>
        </div>
        <img src={x.strMealThumb} alt={x.strMeal} />
      </div>
    </Link>
  ));

  return <div className="recipes-container">{listCategories}</div>;
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
  getRecipes: PropTypes.shape().isRequired,
  category: PropTypes.string.isRequired,
  recipes: PropTypes.shape().isRequired,
  getClickedRecipe: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
