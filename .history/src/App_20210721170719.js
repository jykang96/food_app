import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
function App() {

  const[isDisplayed, setIsDisplayed]= useState(false)
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
          <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
