const initialState = 'Vegetarian';

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return action.category;
    default:
      return state;
  }
};

export default category;
