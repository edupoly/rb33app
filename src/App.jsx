
import './App.css';
import { Outlet,Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <ul>
        <li>
          <Link to="/kaju">KAZAL CHANDAMAMA</Link>
        </li>
        <li>
          <Link to="/re">My Bike</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
