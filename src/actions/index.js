import axios from 'axios';

const updateCategories = () => ({
  type: 'GET_CATEGORIES',
  payload: axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
});

const getRecipes = currentCategory => ({
  type: 'GET_RECIPES',
  payload: axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}`),
});

const getRecipe = recipe => ({
  type: 'GET_RECIPE',
  payload: axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`),
});

const clearRecipe = () => ({ type: 'CLEAR_RECIPE' });

const updateCurrentCategory = category => ({ type: 'CHANGE_CATEGORY', category });

const updateRecipes = recipes => ({ type: 'UPDATE_RECIPES', recipes });

export {
  updateCategories,
  updateCurrentCategory,
  getRecipes,
  updateRecipes,
  getRecipe,
  clearRecipe,
};
