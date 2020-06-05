import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/index';
import './CatalogueItems.css';

const CatalogueItems = props => {
  const { recipes } = props;
  const { fetched, fetching, error } = recipes;
  if (!fetched && !fetching && error === null) {
    props.getRecipes(props.category);
  }

  const listCategories = recipes.recipes.map((x, i) => (
    <button
      type="button"
      className="recipe-item"
      key={x.idMeal}
      tabIndex={i}
      onClick={() => props.setRecipe(x.strMeal)}
    >
      <div className="item-name">
        <p className="item-text">{x.strMeal}</p>
      </div>
      <img src={x.strMealThumb} alt={x.strMeal} />
    </button>
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
});

CatalogueItems.defaultProps = {};

CatalogueItems.propTypes = {
  getRecipes: PropTypes.shape().isRequired,
  setRecipe: PropTypes.shape().isRequired,
  category: PropTypes.string.isRequired,
  recipes: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
