const initialState = [
  { strCategory: "Beef" },
  { strCategory: "Breakfast" },
  { strCategory: "Chicken" },
  { strCategory: "Dessert" },
  { strCategory: "Goat" },
  { strCategory: "Lamb" },
  { strCategory: "Miscellaneous" },
  { strCategory: "Pasta" },
  { strCategory: "Pork" },
  { strCategory: "Seafood" },
  { strCategory: "Side" },
  { strCategory: "Starter" },
  { strCategory: "Vegan" },
  { strCategory: "Vegetarian" }
];

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.current_categories;
    default:
      return state;
  }
};

export default categories;
