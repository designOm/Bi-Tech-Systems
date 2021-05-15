const initialState = {
  minValue: '',
  maxValue: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RANGE':
      //console.log("yashlog",action)
      return { ...state, minValue: action.min, maxValue: action.max };
    case 'MIN_VALUE':
      //console.log("yashlog",action)
      return { ...state, minValue: action.min };
    case 'MAX_VALUE':
      return { ...state, maxValue: action.min };
    default:
      return state;
  }
};

export default filterReducer;
