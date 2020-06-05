import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogueItems from '../containers/CatalogueItems';
import Item from './Item';
import { getRecipe } from '../actions/index';

const Catalogue = props => {
  const { recipe } = props;
  const setRecipe = e => {
    props.getClickedRecipe(e);
  };

  return <div>{recipe.recipe ? <Item /> : <CatalogueItems setRecipe={setRecipe} />}</div>;
};

const mapStateToProps = store => ({
  category: store.category,
  categories: store.categories,
  categoriesFetched: store.categories.fetched,
  recipe: store.displayedRecipe,
});

const mapDispatchToProps = dispatch => ({
  getClickedRecipe: recipe => dispatch(getRecipe(recipe)),
});

Catalogue.defaultProps = {};

Catalogue.propTypes = {
  recipe: PropTypes.shape().isRequired,
  getClickedRecipe: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
