const updateCategories = categories => {
  return { type: "GET_CATEGORIES", categories };
};

const getRecipes = recipes => {
  return { type: "GET_RECIPES", recipes };
};

export { updateCategories, getRecipes };
