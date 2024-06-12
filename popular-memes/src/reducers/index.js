import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
    data: {
        brewery_type: "micro",
        city: "Knox",
        country: "United States",
        name: "10-56 Brewing Company",
        phone: "6308165790",
        postal_code: "46534",
        state: "Indiana",
        street: "400 Brown Cir",
        website_url: null
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return({
                ...state,
                data: {},
                isFetching: true,
                error: ''
            });
        case FETCH_SUCCESS:
            return({
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            });
        case FETCH_ERROR:
            return({
                ...state,
                data: {},
                isFetching: false,
                error: action.payload
            });
        default:
            return state;
    }
};