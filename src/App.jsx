
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import Products from './features/products/Products';
import Posts from './features/posts/Posts';
import { Outlet } from 'react-router-dom';
import Header from './features/shared/Header';

function App() {
  return (
    <div className="border border-2 border-warning m-2 p-2'">
      <Header></Header>
      <h1>App</h1>

      <Outlet></Outlet>
    </div>
  );
}
export default App;
