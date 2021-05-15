import * as actionTypes from '../actionTypes'


const initialState = {
    token: localStorage.getItem('auth-token'),
    loading: false,
};

const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionTypes.IS_LOADING:
            return {
                ...state,
                loading: actions.payload.data
            }
        case actionTypes.REGISTER_USER:
            localStorage.setItem('auth-token', actions.payload.data);
            return {
                ...state,
                token: actions.payload.data
            }
        case actionTypes.LOGIN_USER:
            localStorage.setItem('auth-token', actions.payload.data);
            return {
                ...state,
                token: actions.payload.data
            }
        case actionTypes.LOGOUT:
            localStorage.removeItem('auth-token');
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}

export default authReducer;