import './App.scss';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducer';

const store = createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Todo />
    </Provider>
  );
};

export default App;
