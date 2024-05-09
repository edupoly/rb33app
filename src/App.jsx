import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {Link,Outlet} from 'react-router-dom';
function App(props) {
  return (
    <div className='border border-2 border-danger m-2 p-2'>
      <h1>
        Cart:{props.productsReducer.cart.length}
      </h1>
      <Link to="/products">Products</Link>
      <Link to="/todolist">Todolist</Link>
      <Link to="/counter">Counter</Link>
      <Outlet></Outlet>
    </div>
  );
}
export default connect(store=>store)(App);
