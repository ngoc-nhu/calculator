import React from 'react';

const OutputScreenRow = (props) => {
    return (
        <div className="screen-row" >
            <input style={{height:"100px",outline:"none"}} type="text" readOnly value = {props.value}/>
        </div>
    )
}

export default OutputScreenRow;