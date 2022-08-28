import { Link, NavLink} from "react-router-dom";

import "./App.css";


function App() {

  let activeStyle = {
    background: "yellow"
  };

  const activeMenuStyle = ({isActive}) => {

    let activeStyles = {
      background: "green",
      padding: '15px',
      maring: '6px'
    };

      return isActive ? activeStyles : undefined
  }

  return (
    <div className="App">
      
      <NavLink to="/" style={({ isActive }) =>
              isActive ? {background: "yellow"} : undefined
            }>Bike</NavLink>
      <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Detail</NavLink>
      <NavLink to="/contact" style={activeMenuStyle}>Price</NavLink>
      <NavLink to="/gallery" style={activeMenuStyle}>gallery'</NavLink>
   
    </div>
  );
}

export default App;
