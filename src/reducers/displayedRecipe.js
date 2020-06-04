const displayedRecipe = (state = {}, action) => {
  switch (action.type) {
    case "GET_RECIPE":
      return action.displayedRecipe;
    default:
      return state;
  }
};

export default displayedRecipe;
