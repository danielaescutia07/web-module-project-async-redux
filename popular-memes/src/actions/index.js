import axios from 'axios';

export const getBrew = () => {
    return (dispatch) => {
        dispatch({type: FETCH_START});
        
        axios.get('https://api.openbrewerydb.org/breweries/')
            .then(resp => {
                dispatch({type: FETCH_SUCCESS, payload: resp.data});
            })
            .catch(err => {
                dispatch({type: FETCH_ERROR, payload: err});
            })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (brew) => {
    return({type: FETCH_SUCCESS, payload: brew});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage) => {
    return({type: FETCH_ERROR, payload: errorMessage});
}