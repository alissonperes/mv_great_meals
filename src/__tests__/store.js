import { applyMiddleware, createStore } from 'redux';
import { createPromise } from 'redux-promise-middleware';

import thunk from 'redux-thunk';
import reducer from '../reducers';
import store from '../store';

const middleware = applyMiddleware(createPromise(), thunk);

describe('default store', () => {
  let initStore;
  beforeEach(() => {
    initStore = createStore(reducer, middleware);
  });
  describe('GET_RECIPES reducers', () => {
    it('GET_RECIPES_REJECTED', () => {
      initStore.dispatch({ type: 'GET_RECIPES_REJECTED', payload: 'Some error' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        recipes: {
          fetching: false,
          fetched: false,
          error: 'Some error',
          recipes: [],
        },
      });
    });

    it('GET_RECIPES_PENDING', () => {
      initStore.dispatch({ type: 'GET_RECIPES_PENDING' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        recipes: {
          fetching: true,
          fetched: false,
          error: null,
          recipes: [],
        },
      });
    });

    it('GET_RECIPES_FULFILLED', () => {
      initStore.dispatch({
        type: 'GET_RECIPES_FULFILLED',
        payload: { data: { meals: ['one', 'two'] } },
      });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        recipes: {
          fetching: false,
          fetched: true,
          error: null,
          recipes: ['one', 'two'],
        },
      });
    });
  });

  describe('GET_RECIPE reducers', () => {
    it('GET_RECIPE_PENDING', () => {
      initStore.dispatch({ type: 'GET_RECIPE_PENDING' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        displayedRecipe: {
          fetching: true,
          fetched: false,
          error: null,
          recipe: null,
        },
      });
    });

    it('GET_RECIPE_REJECTED', () => {
      initStore.dispatch({ type: 'GET_RECIPE_REJECTED', payload: 'Some Error' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        displayedRecipe: {
          fetching: false,
          fetched: false,
          error: 'Some Error',
          recipe: null,
        },
      });
    });

    it('GET_RECIPE_FULFILLED', () => {
      initStore.dispatch({ type: 'GET_RECIPE_FULFILLED', payload: { data: { meals: ['Meals'] } } });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        displayedRecipe: {
          fetching: false,
          fetched: true,
          error: null,
          recipe: 'Meals',
        },
      });
    });

    it('CLEAR_RECIPE', () => {
      initStore.dispatch({ type: 'CLEAR_RECIPE' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        displayedRecipe: {
          fetching: false,
          fetched: false,
          error: null,
          recipe: null,
        },
      });
    });

    it('INVALID_CALL', () => {
      initStore.dispatch({ type: 'INVALID_CALL' });

      expect(initStore.getState()).toStrictEqual(store.getState());
    });
  });

  describe('GET_CATEGORIES reducers', () => {
    it('GET_CATEGORIES_PENDING', () => {
      initStore.dispatch({ type: 'GET_CATEGORIES_PENDING' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        categories: {
          categories: store.getState().categories.categories,
          fetching: true,
          fetched: false,
          error: null,
        },
      });
    });

    it('GET_CATEGORIES_REJECTED', () => {
      initStore.dispatch({ type: 'GET_CATEGORIES_REJECTED', payload: 'Some Error' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        categories: {
          fetching: false,
          fetched: false,
          error: 'Some Error',
          categories: store.getState().categories.categories,
        },
      });
    });

    it('GET_CATEGORIES_FULFILLED', () => {
      initStore.dispatch({
        type: 'GET_CATEGORIES_FULFILLED',
        payload: { data: { meals: ['one', 'two'] } },
      });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        categories: {
          fetching: false,
          fetched: true,
          error: null,
          categories: ['one', 'two'],
        },
      });
    });

    it('INVALID_CALL', () => {
      initStore.dispatch({
        type: 'INVALID_CALL',
      });

      expect(store.getState()).toStrictEqual(initStore.getState());
    });
  });

  describe('GET_CATEGORY', () => {
    it('CHANGE_CATEGORY', () => {
      initStore.dispatch({ type: 'CHANGE_CATEGORY', category: 'Vegan' });

      expect(initStore.getState()).toStrictEqual({
        ...store.getState(),
        category: 'Vegan',
      });
    });

    it('INVALID_CALL', () => {
      initStore.dispatch({ type: 'INVALID_CALL', category: 'Vegan' });

      expect(initStore.getState()).toStrictEqual({ ...store.getState() });
    });
  });
});
