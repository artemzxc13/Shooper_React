import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Basket from './components/Basket';
import { Route } from 'react-router-dom';

function App() {
  const [shoes, setShoes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setShoes(json.shoes);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" render={() => <Home items={shoes} />} exact />
      <Route path="/basket" component={Basket} exact />
    </div>
  );
}

export default App;
