import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Basket from './components/Basket';
import { Route } from 'react-router-dom';

//import { fetchShoes } from './redux/actions/shoes.js';
//import { useDispatch } from 'react-redux';

function App() {
  //const dispatch = useDispatch();

  React.useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" component={Home} exact />
      <Route path="/basket" component={Basket} exact />
    </div>
  );
}

export default App;
