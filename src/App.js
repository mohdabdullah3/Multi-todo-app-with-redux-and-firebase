// import Day1t2 from "./task2/Day1t2";
import Todo from "./Todo";
import { Provider } from 'react-redux';
import Store from './redux/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
