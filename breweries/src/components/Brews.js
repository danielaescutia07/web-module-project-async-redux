import React from "react";

const Brews = (props) => {

    return (
        <div className='brewCard'>
            <h3>Name:{props.brew.name}</h3>
            <p>Type: {props.brew.brewery_type}</p>
            <p>Location: {props.brew.state}, {props.brew.country}</p>
            <a href={props.brew.website_url}>{props.brew.website_url}</a>
        </div>
    )
}

export default Brews;