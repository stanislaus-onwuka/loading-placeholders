import React from 'react';
import './placeholder.css'

const Placeholder = ({height, width, br, margin}) =>{

    return(
        <>
            <div className="placeholder" style={{height:height, width:width, borderRadius:br, margin:margin}}></div>
        </>
        
    )

}

const Placeholders = ({height, width, br, n, margin})=>{
    const loading = (pHeight, pWidth, pBorderRadius, pNumber) =>{
        let placeholders = [];
        for (let i = 0; i < Number(pNumber); i++) {
            placeholders.push( <Placeholder height={`${pHeight}`} width={`${pWidth}`} br={`${pBorderRadius}`} margin={`${margin}`} key={i}/> )
        }
        return placeholders; 
    }

    return(
        <div className="placeholders">
            { loading(height, width, br, n) }
        </div>
    )
}

export default Placeholders;

