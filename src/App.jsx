import logo from './logo.svg';
import './App.css';
import { useMemo, useState,useCallback } from 'react';
import Todolist from './Todolist';
import AnotherChild from './AnotherChild';

function App() {
  console.log("App Rendered")
  var [c,setC]=useState(1);
  // var [p,setP] = useState("praveen");
  var p = useMemo(()=>{return [10,40,38]},[]);
  var thoppas = useCallback(function (){
    console.log("Brahmananadam")
  },[])
  function inc(){
    setC(c=>c+1)
  }
  function dec(){
    setC(c=>c-1)
  }
  return (
    <div className="border border-2 border-danger p-2 ">
      <h1>App</h1>
      <h2>Counter:{c}</h2>
      <button onClick={()=>{inc()}}>Increment</button>
      <button onClick={()=>{dec()}}>Decrement</button>
      <Todolist></Todolist>
      <AnotherChild a1={p} f1={thoppas}></AnotherChild>
    </div>
  );
}
export default App;
// parent render ===? child render avithundi

