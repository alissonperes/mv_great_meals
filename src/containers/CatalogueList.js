import React from "react";
import { connect } from "react-redux";
import { updateCategories } from "../actions/index";
import "./CatalogueList.css";

const CatalogueList = props => {
  if (
    !props.categories.fetched &&
    !props.categories.fetching &&
    props.categories.error === null
  ) {
    props.getCategories();
  }
  const listCategories = props.categories.categories.map(x => {
    const currentCategory =
      x.strCategory !== props.category ? "list-item" : "active list-item";

    return (
      <li
        className={currentCategory}
        key={x.strCategory}
        onClick={props.handleChange}
      >
        {x.strCategory}
      </li>
    );
  });

  return (
    <div>
      <ul className="header-list">{listCategories}</ul>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    category: store.category,
    categories: store.categories,
    store: store
  };
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(updateCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueList);
