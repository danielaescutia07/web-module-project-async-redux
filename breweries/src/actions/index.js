import axios from 'axios';

export const getBrews = () => {
    return (dispatch => {
        dispatch({type: FETCH_START});
        axios.get('https://api.openbrewerydb.org/breweries/')
            .then(res => {
                dispatch({type: FETCH_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: FETCH_ERROR, payload: err})
            })
    })
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (brews) => {
    return({type: FETCH_SUCCESS, payload: brews});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage) => {
    return({type: FETCH_ERROR, payload: errorMessage});
}


