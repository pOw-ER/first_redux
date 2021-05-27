import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1
      }
    case 'decrement':
      return {
        value: state.value - 1
      }
    default:
      return state
  }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'increment' })
// {value: 1}
store.dispatch({ type: 'increment' })
// {value: 2}
store.dispatch({ type: 'decrement' })
// {value: 1}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
