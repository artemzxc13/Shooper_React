import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

function ShoeBlock({ name, imageUrl, price, sizes }) {
  const availableSizes = [39, 40, 41, 42, 43, 44];

  const [activeSize, setActivSize] = React.useState(sizes[0]);

  const onSelectSize = (index) => {
    setActivSize(index);
  };
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={imageUrl} alt="Shoes" />
      <h4 className="cart-item__title">{name}</h4>
      <div className="cart-item__selector">
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size} size
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-item__bottom">
        <div className="cart-item__price">${price}</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

ShoeBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default ShoeBlock;
