import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  updateCategories, updateCurrentCategory, getRecipes, clearRecipe,
} from '../actions/index';
import './CatalogueList.css';

const CatalogueList = props => {
  const { categories } = props;
  const { fetched, fetching, error } = categories;
  if (!fetched && !fetching && error === null) {
    props.getCategories();
  }

  const handleChangeCategory = e => {
    props.updateCategory(e.target.innerText);
    props.getCurrentRecipes(e.target.innerText);
    props.clearRecipe();
  };

  const listCategories = categories.categories.map(x => {
    const currentCategory = x.strCategory !== props.category ? 'list-item' : 'active list-item';

    return (
      <li key={x.strCategory} className={currentCategory}>
        <button type="button" onClick={handleChangeCategory}>
          {x.strCategory}
        </button>
      </li>
    );
  });

  return (
    <div className="header-container">
      <ul className="header-list">{listCategories}</ul>
    </div>
  );
};

const mapStateToProps = store => ({
  category: store.category,
  categories: store.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(updateCategories()),
  updateCategory: category => dispatch(updateCurrentCategory(category)),
  getCurrentRecipes: category => dispatch(getRecipes(category)),
  clearRecipe: () => dispatch(clearRecipe()),
});

CatalogueList.defaultProps = {};

CatalogueList.propTypes = {
  updateCategory: PropTypes.shape().isRequired,
  clearRecipe: PropTypes.shape().isRequired,
  getCurrentRecipes: PropTypes.shape().isRequired,
  getCategories: PropTypes.shape().isRequired,
  category: PropTypes.string.isRequired,
  categories: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueList);
