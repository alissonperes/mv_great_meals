const initstate = {
  recipe: null,
  fetching: false,
  fetched: false,
  error: null,
};

const displayedRecipe = (state = initstate, action) => {
  switch (action.type) {
    case 'GET_RECIPE_PENDING': {
      return { ...state, fetching: true, error: null };
    }
    case 'GET_RECIPE_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'GET_RECIPE_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        error: null,
        recipe: action.payload.data.meals[0],
      };
    }
    case 'CLEAR_RECIPE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        recipe: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default displayedRecipe;
