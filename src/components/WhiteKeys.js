import React from 'react';

const BlackKeys = ({ keys, pressedKeys }) => {

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex'}}>
            {keys.map(key => 
            <div className={pressedKeys.includes(key.keyboard) ? 'outerBlackKeyPressed' : 'outerBlackKey'} style={{ justifyContent: key.align, width: key.note === 'G#' ? '50%' : '100%' }}>
                <div className={pressedKeys.includes(key.keyboard) ? 'innerBlackKeyPressed' : 'innerBlackKey'}>
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#171419' }}></div>
                </div>
            </div>
            )}
        </div>
    )
}

export default BlackKeys;