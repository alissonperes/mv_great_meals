const updateRecipes = async category => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    const updatedRecipes = data.meals;
    console.log(data);
    this.setState({ recipes: updatedRecipes });

    this.props.updateRecipes(updatedRecipes);
  } catch (e) {
    console.error(e);
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await response.json();

    return data.meals;
  } catch (e) {
    console.error("ERROR======================", e);
  }
};

export { updateRecipes, getCategories };
