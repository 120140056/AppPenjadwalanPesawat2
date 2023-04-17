import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import addReducer from './reducers/addReducer';
import editReducer from './reducers/editReducer';
import deleteReducer from './reducers/deleteReducer';

const rootReducer = combineReducers({
  add: addReducer,
  edit: editReducer,
  delete: deleteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
