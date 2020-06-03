const initialState = {};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPE":
      return action.recipe;
    default:
      return state;
  }
};

export default recipe;
