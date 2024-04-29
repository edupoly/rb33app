import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterR from './components/CounterR';
import TodolistR from './components/TodolistR';

function App() {
  return (
    <div className="border border-2 border-danger m-2 p-2">
      <h1>App Component</h1>
      <TodolistR></TodolistR>
      <Counter></Counter>
      <CounterR></CounterR>
    </div>
  );
}

export default App;
