import React from 'react'
import {BrowserRouter,Route }from 'react-router-dom';
import Home from './components/Pages/page';
import Footer from './components/Footer/Footer';
import { Switch } from 'react-router-dom';






function App() {

  
    



  return (
    
      <div className="App">
          <BrowserRouter> 
          <Switch> 
            <Route path="/hero" exact element={<Home />} />
              <Route path='/contact' component={<Footer/>} />
            </Switch>
          </BrowserRouter>
          <Home/>
      
      </div>
    
  );
}

export default App;
