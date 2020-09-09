import React from 'react';

const Keys = ({ keys, pressedKeys, color }) => {

    if (color === 'black') return (
        <div style={{ width: '100%', height: '100%', display: 'flex'}}>
            {keys.map(key => 
            <div key={key.note} className={pressedKeys.includes(key.keyboard) ? 'outerBlackKeyPressed' : 'outerBlackKey'} style={{ justifyContent: key.align, width: key.note === 'G#' ? '50%' : '100%' }}>
                <div className={pressedKeys.includes(key.keyboard) ? 'innerBlackKeyPressed' : 'innerBlackKey'}>
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#171419', textAlign:'center', padding: '15px'}}>{key.note}</div>
                </div>
            </div>
            )}
        </div>
    )

    if (color === 'white') return (
        <div style={{ width: '100%', height: '100%', display: 'flex'}}>
            {keys.map(key => 
            <div key={key.note} className={pressedKeys.includes(key.keyboard) ? 'outerWhiteKeyPressed' : 'outerWhiteKey'}>
                <div className={pressedKeys.includes(key.keyboard) ? 'innerWhiteKeyPressed' : 'innerWhiteKey'} style={{ textAlign: 'center', padding: '20px' }}>{key.note}</div>
            </div>
            )}
        </div>
    )
}

export default Keys;