import * as actionTypes from '../actionTypes';
import Axios from 'axios';
import allActions from './index';
import AxiosInstance from '../../utils/api'
import URL from '../../utils/url'


const logout = () => {
    return function (dispatch) {
        return dispatch(allActions.startLoading(true)).then(() => {
            return Promise.resolve(dispatch({ type: actionTypes.LOGOUT })).then(() => {
                return dispatch(allActions.startLoading(false))
            })
        });
    }
}


const loginByEmail = (data) => {
    return function (dispatch) {
        AxiosInstance.post(URL.LOGIN, data).then((res) => {
            return Promise.resolve(dispatch({ type: actionTypes.LOGIN_USER, payload: { data: res.data.token } })).then(() => {
                //console.log('error')
            })
        })
    }
}

const startLoading = (data) => {
    return function (dispatch) {
        return Promise.resolve(dispatch({ type: actionTypes.IS_LOADING, payload: { data } }));
    }
}

export default {
    logout,
    loginByEmail,
    startLoading
};