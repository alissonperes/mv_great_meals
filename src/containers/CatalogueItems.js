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
  let listCategories = [];

  if (!fetched && !fetching && error === null) {
    props.getRecipes(props.category);
  } else if (fetching) {
    listCategories = (
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
    // <Link to="/" onClick={() => setRecipe(x.idMeal)} key={x.idMeal}>
  } else if (fetched) {
    listCategories = recipes.recipes.map(x => (
      <Link to={`/item/${x.idMeal}`} onClick={() => setRecipe(x.idMeal)} key={x.idMeal}>
        <div className="recipe-item">
          <div className="item-name">
            <p className="item-text">{x.strMeal}</p>
          </div>
          <img src={x.strMealThumb} alt={x.strMeal} />
        </div>
      </Link>
    ));
  }

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
  getRecipes: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  recipes: PropTypes.shape().isRequired,
  getClickedRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
