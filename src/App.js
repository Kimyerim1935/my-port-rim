import React from 'react';
import './App.css';
import { BrowserRouter , Route ,NavLink} from 'react-router-dom'
import Main from './routes/Main';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contect from './routes/Contect';
import Instagram from './routes/Instagram';

function App() {
  return ( 
   <BrowserRouter> 
     <div className="nav">
          <div className="navlogo">
        <h3>hello i am logo</h3>
          </div>
            <div className="navmenu">
              <NavLink exact to="/" activeClassName="active">Main</NavLink>
              <NavLink to="/About" activeClassName="active">About</NavLink>
              <NavLink to="/Portfolio" activeClassName="active" >Portfolio</NavLink>
              <NavLink to="/Contect" activeClassName="active" >Contect</NavLink>
          </div>
        
      </div>
         <div> 
            <Route exact path='/' component={Main} /> 
            <Route path='/About' component={About} /> 
            <Route path='/Portfolio' component={Portfolio} /> 
            <Route path='/Contect' component={Contect} /> 
            <Route path="/Instagram"  component={Instagram} / > 
         </div> 
  </BrowserRouter>
  );
}





export default App;
