import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Count from './components/Counter.js'
import Api from './helpers/Api.js'
function App() {
  return (
    <Fragment>
          <Navbar />
          <Count/>
          <Api/>
         
    </Fragment>


  );
}

export default App;
