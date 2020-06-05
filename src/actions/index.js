import axios from "axios";

const updateCategories = () => {
  return {
    type: "GET_CATEGORIES",
    payload: axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    )
  };
};

const getRecipes = currentCategory => {
  return {
    type: "GET_RECIPES",
    payload: axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}`
    )
  };
};

const getRecipe = recipe => {
  return {
    type: "GET_RECIPE",
    payload: axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    )
  };
};

const clearRecipe = () => {
  return { type: "CLEAR_RECIPE" };
};

const updateCurrentCategory = category => {
  return { type: "CHANGE_CATEGORY", category };
};

const updateRecipes = recipes => {
  return { type: "UPDATE_RECIPES", recipes };
};

export {
  updateCategories,
  updateCurrentCategory,
  getRecipes,
  updateRecipes,
  getRecipe,
  clearRecipe
};
