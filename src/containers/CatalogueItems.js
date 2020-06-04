import React from "react";
import { connect } from "react-redux";
import "./CatalogueItems.css";
import { updateCategories } from "../actions/index";

const items = [
  {
    strMeal: "Baingan Bharta",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    idMeal: "52807"
  },
  {
    strMeal: "Chickpea Fajitas",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    idMeal: "52870"
  },
  {
    strMeal: "Dal fry",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    idMeal: "52785"
  },
  {
    strMeal: "Egg Drop Soup",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1529446137.jpg",
    idMeal: "52955"
  },
  {
    strMeal: "Flamiche",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
    idMeal: "52906"
  }
];

class CatalogueItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: this.props.category,
      recipes: this.props.recipes
    };
  }

  render() {
    const currentCategoryItems = [];
    items.forEach(x =>
      currentCategoryItems.push(
        <div className="recipe-list-item">
          <p>{x.strMeal}</p>
          <img src={x.strMealThumb} alt={x.strMeal} />
        </div>
      )
    );
    return <div className="recipe-items">{currentCategoryItems}</div>;
  }
}

const mapStateToProps = state => ({
  category: state.category,
  recipes: state.recipes
});

const mapDispatchToProps = dispatch => ({
  updateCategories: categories => dispatch(updateCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueItems);
