import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Basket from './components/Basket';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { setShoes } from './redux/actions/shoes.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ shoesReducer, filtersReducer }) => {
    return {
      items: shoesReducer.items,
      sortBy: filtersReducer.sortBy,
    };
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setShoes(data.shoes));
    });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" render={() => <Home items={items} />} exact />
      <Route path="/basket" component={Basket} exact />
    </div>
  );
}

export default App;
