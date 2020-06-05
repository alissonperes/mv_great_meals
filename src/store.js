import { applyMiddleware, createStore } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const promise = createPromise();

const middleware = applyMiddleware(promise, thunk, createLogger());
export default createStore(reducer, middleware);
