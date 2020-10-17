import React from 'react';
import './App.css';
import { BrowserRouter ,  Route , Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Main from './routes/Main';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contect from './routes/Contect';


function App() {
  return ( 
   <BrowserRouter> 
   <Switch>
     <div>
       <Navigation/> 
       
         <div> 
            <Route exact path='/' component={Main} /> 
            <Route path='/About' component={About} /> 
            <Route path='/Portfolio' component={Portfolio} /> 
            <Route path='/Contect' component={Contect} /> 
            
         </div> 
      </div> 
      </Switch>
  </BrowserRouter>
  );
}





export default App;
