import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { getBrew } from '../actions';

const Meme = ({data, dispatch, error, isFetching}) => {

    

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }

    const brewHandle = () => {
        dispatch(getBrew());
    }

    return(
        <div>
            <div>
                {}
                <h2>{data.brewery_type}</h2>
            </div>
            <button onClick={brewHandle}>Check Out New Meme</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Meme);