import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>App</h1>
      <input type="text" onChange={(e)=>{console.log(e.target.value)}}/>
      <h1>{}</h1>
    </div>
  );
}
export default App;
/*
  functional components
  class components

  pure components
  React.memo()

  Higher Order Component
  (oldcomponents) -------> newcomponents with added functionality
  hooks

  Smart Components(Container Components)(uncontrolled components)
    logic
  Dumb Components(Presentational Components)(controlled components)
    only UI
*/