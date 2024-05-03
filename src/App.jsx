import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Products from './Products';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className='border border-2 border-danger m-2 p-2'>
      <h1>
        Cart:{props.productsReducer.cart.length}

      </h1>
      <Products></Products>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}
export default connect(store=>store)(App);
