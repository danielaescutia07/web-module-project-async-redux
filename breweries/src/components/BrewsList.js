import React from "react";
import { connect } from 'react-redux';
import Brews from "./Brews";



const BrewsList = (props) => {
    const { brews } = props;

    return(
        <div className='brewList'>
            {brews.map(brew => (
                <Brews brew={brew} key={brew.id} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        brews: state.brews
    }
}

export default connect(mapStateToProps)(BrewsList);