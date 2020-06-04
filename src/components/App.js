import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || "Loading great meal...",
      image: logo,
      categories: this.props.categories,
      displayCategory: this.props.category
    };
  }

  render() {
    return <div className="App">{this.props.categories.length}</div>;
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  category: state.category,
  recipes: state.recipes,
  recipe: state.displayedRecipe
});

export default connect(mapStateToProps)(App);
