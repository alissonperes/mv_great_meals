import React from "react";
import { connect } from "react-redux";
import "./CatalogueList.css";
import { updateCategories } from "../actions/index";

class CatalogueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories,
      displayCategory: this.props.category
    };
  }

  async getCategories() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data = await response.json();
      const updatedCategories = data.meals;

      this.props.updateCategories(updatedCategories);
    } catch (e) {
      console.error(e);
    }
  }

  componentWillMount() {
    this.getCategories();
  }

  render() {
    // console.log(this.props);
    const categoryItems = [];
    this.props.categories.forEach(x =>
      categoryItems.push(
        <li
          className={
            x.strCategory === this.state.displayCategory
              ? "selected-item"
              : "list-item"
          }
          key={x.strCategory}
        >
          {x.strCategory}
        </li>
      )
    );
    return (
      <div className="header">
        <ul className="header-list">{categoryItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  category: state.category,
  recipes: state.recipes,
  recipe: state.displayedRecipe
});

const mapDispatchToProps = dispatch => ({
  updateCategories: categories => dispatch(updateCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueList);
