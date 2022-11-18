import axios from 'axios';

export const fetchShoes = () => (dispatch) => {
  axios.get('http://localhost:3001/shoes').then(({ data }) => {
    dispatch(setShoes(data));
  });
};

export const setShoes = (items) => ({
  type: 'SET_SHOES',
  payload: items,
});
