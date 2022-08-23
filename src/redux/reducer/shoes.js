const initialState = {
  items: [],
  isLoading: false,
};

const shoes = (state = initialState, action) => {
  if (action.type === 'SET_SHOES') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default shoes;
