import { createStore,applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import rootReduceres from './reduceres';

const store = createStore(
    rootReduceres,
    applyMiddleware(thunk)
)
export default store;

