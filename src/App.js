import React from 'react';
import './App.css';
import { BrowserRouter , Route ,NavLink} from 'react-router-dom'
import Main from './routes/Main';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contect from './routes/Contect';
import Instagram from './routes/Instagram';
import Logo from './SVG/Logo.svg';


function App() {
  return ( 
   <BrowserRouter> 
   <div>
     <div className="nav">
          <div className="navlogo">
          <NavLink exact to="/my-port-rim">
            <img src={Logo} alt="logo" / >
          </NavLink>
          </div>
            <div className="navmenu">
              <NavLink exact to="/my-port-rim" activeClassName="active">Main</NavLink>
              <NavLink to="/my-port-rim/About" activeClassName="active">About</NavLink>
              <NavLink to="/my-port-rim/Portfolio" activeClassName="active" >Portfolio</NavLink>
              <NavLink to="/my-port-rim/Contect" activeClassName="active" >Contect</NavLink>
          </div>
            
      </div>
         <div> 
            <Route exact path='/my-port-rim' component={Main} /> 
            <Route path='/my-port-rim/About' component={About} /> 
            <Route path='/my-port-rim/Portfolio' component={Portfolio} /> 
            <Route path='/my-port-rim/Contect' component={Contect} /> 
            <Route path="/my-port-rim/Instagram"  component={Instagram} / > 
            
         </div> 
         </div>
  </BrowserRouter>
  );
}





export default App;
