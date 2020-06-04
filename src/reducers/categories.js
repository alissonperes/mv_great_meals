const initstate = {
  categories: [],
  fetching: false,
  fetched: false,
  error: null
};

const categories = (state = initstate, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_PENDING": {
      return { ...state, fetching: true };
    }
    case "GET_CATEGORIES_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "GET_CATEGORIES_FULFILLED": {
      return {
        ...state,
        fetched: true,
        fetching: false,
        categories: action.payload.data.meals
      };
    }
    default: {
      return state;
    }
  }
};

export default categories;
