const initstate = {
  recipes: [],
  fetching: false,
  fetched: false,
  error: null
};

const recipes = (state = initstate, action) => {
  switch (action.type) {
    case "GET_RECIPES_PENDING": {
      return { ...state, fetching: true };
    }
    case "GET_RECIPES_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "GET_RECIPES_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        recipes: action.payload.data.meals
      };
    }
    default: {
      return state;
    }
  }
};

export default recipes;
