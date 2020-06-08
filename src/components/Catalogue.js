import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CatalogueItems from '../containers/CatalogueItems';
import Item from './Item';

const Catalogue = props => {
  const { recipe } = props;
  console.log('CAALOGUE');

  return (
    <Router>
      <Switch>
        <Route component={recipe.recipe ? Item : CatalogueItems} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = store => ({
  category: store.category,
  categories: store.categories,
  categoriesFetched: store.categories.fetched,
  recipe: store.displayedRecipe,
});

Catalogue.defaultProps = {};

Catalogue.propTypes = {
  recipe: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Catalogue);
