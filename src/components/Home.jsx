import React from 'react';
import Categories from './Categories';
import ShoeBlock from './ShoeBlock';
import SortPopup from './SortPopup';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const categoryesName = ['Sneakers', 'Heritage', 'Will Be'];
const sortItems = [
  { name: 'popular', type: 'popular' },
  { name: 'priсe', type: 'priсe' },
  { name: 'alphabetically', type: 'alphabetically' },
];
function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ shoesReducer }) => shoesReducer.items);

  const onSelectCatagory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCatagory} items={categoryesName} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">All shoes</h2>
      <div className="content__items">
        {items && items.map((obj) => <ShoeBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
