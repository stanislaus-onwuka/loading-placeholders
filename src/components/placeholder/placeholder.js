import React from 'react';
import './placeholder.css'

const Placeholder = ({height, width}) =>{

    return(
        <>
            <div className="placeholder" style={{height:height, width:width}}></div>
        </>
        
    )

}

export default Placeholder;

