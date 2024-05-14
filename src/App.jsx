import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Products from './Products';
import { connect } from 'react-redux';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App(props) {
  return (
    <div className='border border-2 border-danger m-2 p-2'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
export default connect(store=>store)(App);
