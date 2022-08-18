import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: '40', label: '40' },
  { value: '41', label: '41' },
  { value: '42', label: '42' },
  { value: '43', label: '43' },
  { value: '44', label: '44' },
];

function Size({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="cart-item__selector">
      <Select
        placeholder="Please select a size"
        className={activeItem === null ? 'active' : ''}
        onClick={() => onSelectItem(null)}
        options={options}
      />
    </div>
  );
}
export default Size;
