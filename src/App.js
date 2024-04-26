import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className='border border-2 border-danger m-2 p-2'>
      <h1>This is going to be our life</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
