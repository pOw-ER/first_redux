import './App.css';
import { createStore } from 'redux'
// import { useSelector } from 'react-redux'
import counterReducer from './redux/counterReducer'

const store = createStore(counterReducer)

store.dispatch({ type: 'decrement' })
store.subscribe(() => console.log(store.getState()))
function App() {
  return (
    <div className="App">
      <h1>HELLO REDUX</h1>
    </div>
  );
}

export default App;
