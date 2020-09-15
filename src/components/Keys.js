import React from 'react';
import BlackKey from './BlackKey';

const Keys = ({ keys, pressedKeys, color }) => {

    if (color === 'black') return (
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
            {keys.map(key =>
                <BlackKey key={key.note} playKey={key} pressedKeys={pressedKeys}/>
            )}
        </div>
    )

    if (color === 'white') return (
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
            {keys.map(key =>
                <div key={key.note} className={pressedKeys.includes(key.keyboard) ? 'outerWhiteKeyPressed' : 'outerWhiteKey'}>
                    <div className={pressedKeys.includes(key.keyboard) ? 'innerWhiteKeyPressed' : 'innerWhiteKey'} style={{ textAlign: 'center', padding: '20px' }}>{key.note}</div>
                </div>
            )}
        </div>
    )
}

export default Keys;