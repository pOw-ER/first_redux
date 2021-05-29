import { createStore, combineReducers } from 'redux'
import blogReducer from '../reducers/blogs';
import authReducer from '../reducers/auth';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    combineReducers({
      blogs: blogReducer,
      auth: authReducer
    })
  );
  return store;
}

