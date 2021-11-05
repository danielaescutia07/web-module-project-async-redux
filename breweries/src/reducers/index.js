import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";
// import data from "../data";

const initialState = {
    brews: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return({
                ...state,
                brews: [],
                isFetching: true,
                error: ''
            });
        case FETCH_SUCCESS:
            return({
                ...state,
                brews: action.payload,
                isFetching: false,
                error: ''
            });
        case FETCH_ERROR:
            return({
                ...state,
                brews: [],
                isFetching: false,
                error: action.payload
            });
        default:
            return state;
    }
};