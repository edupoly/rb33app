
import { useState } from 'react';
import './App.css';
import Parent from './Parent';
import { MyContext } from './MyContext';
const mydetails = {
  firstname:"jagdeesh",
  age:22,
  place:"Rayavaram"
}
function App() {
  var [institute,setInstitute]=useState("Edupoly")
  return (
    <MyContext.Provider value={{mydetails}}>
      <div className='border border-2 border-success p-2 m-2'>
        <h1>App:{institute}</h1>
        <Parent></Parent>
      </div>
    </MyContext.Provider>
  );
}
export default App;
