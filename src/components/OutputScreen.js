import React from 'react';
import OutputScreenRow from './OutputScreenRow';


const OutputScreen = (props) => {
    return (
        <div className="screen" style={{textAlign:"right", fontSize:70,color:"white",height:"100px"}}>
            <OutputScreenRow value = {props.question}/>
        </div>
    )
}

export default OutputScreen;