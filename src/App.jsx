
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import Products from './features/products/Products';

function App() {
  return (
    <div className="border border-2 border-warning m-2 p-2'">
      <h1>App</h1>
      {/* <Products></Products> */}
      <Countries></Countries>
      {/* <Counter></Counter>
      <Todolist></Todolist> */}
    </div>
  );
}
export default App;
