// import React from "react";
// import { connect } from "react-redux";
// import CatalogueList from "../containers/CatalogueList";
// import Catalogue from "./Catalogue";
// import { updateCurrentCategory, getRecipes } from "../actions/index";
//
// const App = props => {
//   const handleChangeCategory = e => {
//     props.updateCategory(e.target.innerText);
//     props.getCurrentRecipes(e.target.innerText);
//   };
//
//   // <CatalogueList handleChange={handleChangeCategory} />
//   return (
//     <div>
//       <Catalogue />
//     </div>
//   );
// };
//
// const mapStateToProps = store => {
//   return {
//     category: store.category,
//     categories: store.categories,
//     categoriesFetched: store.categories.fetched,
//     store: store
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   updateCategory: category => dispatch(updateCurrentCategory(category)),
//   getCurrentRecipes: category => dispatch(getRecipes(category))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
