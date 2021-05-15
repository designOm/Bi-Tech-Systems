const initialState = {
rejectModal: true,
  };

  const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REJECT_MODAL':
            return { ...state, rejectModal: action.status };
      default:
        return state;
    }
  };
  
  export default popupReducer;