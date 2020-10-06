import React from 'react';
import './App.css';
import { HashRouter ,  Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Main from './routes/Main';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contect from './routes/Contect';

function App() {
  return ( 
   <HashRouter> 
     <div>
       <Navigation/> 
       
         <div> 
            <Route exact path='/' component={Main} /> 
            <Route path='/About' component={About} /> 
            <Route path='/Portfolio' component={Portfolio} /> 
            <Route path='/Contect' component={Contect} /> 
         </div> 
      </div> 

  </HashRouter>
  );
}





export default App;
