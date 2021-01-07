import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './components/header-component/header.component'
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component'

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div >
      {/* <Homepage /> */}
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
