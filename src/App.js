import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || "Loading great meal...",
      image: logo,
      store: this.props.store
    };
  }

  componentDidMount() {
    try {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(resp => resp.json())
        .then(data => {
          const { strMeal, strMealThumb } = data.meals[0];
          this.setState({ name: strMeal, image: strMealThumb });
        });
      console.log(this.state);
    } catch (e) {
      console.error(e);
    }
  }

  componentWillMount() {
    return <div>Will mount</div>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} className="App-logo" alt="logo" />

          <p>{this.state.name}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ store: state });

export default connect(mapStateToProps)(App);