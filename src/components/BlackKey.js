import React from 'react';

const BlackKey = ({note, align, pressed}) => {

    return (
        <div className={pressed ? 'outerBlackKeyPressed' : 'outerBlackKey' } style={{justifyContent: align, width: note === 'G#' ? '50%' : '100%'}}>
            <div className={pressed ? 'innerBlackKeyPressed' : 'innerBlackKey' }>
                <div style={{width:'100%', height:'100%', borderRadius:'50%', backgroundColor:'#171419'}}></div>
            </div>
        </div>
    )
}

export default BlackKey;