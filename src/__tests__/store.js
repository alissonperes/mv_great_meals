import { applyMiddleware, createStore } from 'redux';
import { createPromise } from 'redux-promise-middleware';

import thunk from 'redux-thunk';
import reducer from '../reducers';
import store from '../store';

const middleware = applyMiddleware(createPromise(), thunk);

const initStore = createStore(reducer, middleware);

it('store creation should return default store', () => {
  expect(store.getState()).toStrictEqual(initStore.getState());
});

it('store dispatch GET_RECIPES_PENDING should alter store default state', () => {
  store.dispatch({ type: 'GET_RECIPES_REJECTED', payload: 'Some error' });

  expect(store.getState()).toStrictEqual({
    ...store.getState(),
    recipes: {
      fetching: false,
      fetched: false,
      error: 'Some error',
      recipes: [],
    },
  });
});

it('store dispatch GET_RECIPES_PENDING should alter store default state', () => {
  store.dispatch({ type: 'GET_RECIPES_PENDING' });

  expect(store.getState()).toStrictEqual({
    ...store.getState(),
    recipes: {
      fetching: true,
      fetched: false,
      error: null,
      recipes: [],
    },
  });
});

it('store dispatch GET_RECIPE_PENDING should alter store default state', () => {
  store.dispatch({ type: 'GET_RECIPE_PENDING' });

  expect(store.getState()).toStrictEqual({
    ...store.getState(),
    displayedRecipe: {
      fetching: true,
      fetched: false,
      error: null,
      recipe: null,
    },
  });
});
