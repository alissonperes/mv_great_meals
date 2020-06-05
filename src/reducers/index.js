import { combineReducers } from "redux";
import categories from "./categories";
import category from "./category";
import displayedRecipe from "./displayedRecipe";
import recipes from "./recipes";

export default combineReducers({
  categories,
  category,
  recipes,
  displayedRecipe
});
