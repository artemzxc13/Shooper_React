import React from 'react';
import Categories from './Categories';
import ShoeBlock from './ShoeBlock';
import SortPopup from './SortPopup';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={['Sneakers', 'Heritage', 'Will Be']}
        />
        <SortPopup
          onClick={(name) => console.log(name)}
          items={[
            { name: 'popular', type: 'popular' },
            { name: 'priсe', type: 'priсe' },
            { name: 'alphabetically', type: 'alphabetically' },
          ]}
        />
      </div>
      <h2 className="content__title">All shoes</h2>
      <div className="content__items">
        {items && items.map((obj) => <ShoeBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
