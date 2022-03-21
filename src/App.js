import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import ItemList from './components/ItemList.jsx'
import Api from './helpers/Api.js'
function App() {
  return (
    <Fragment>
          <Navbar />
          <ItemList/>
          <Api/>
    </Fragment>


  );
}

export default App;
