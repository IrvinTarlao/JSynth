import React from 'react';

const WhiteKey = ({ note, pressed }) => {

    return (
        <div className={pressed ? 'outerWhiteKeyPressed' : 'outerWhiteKey'}>
            <div className={pressed ? 'innerWhiteKeyPressed' : 'innerWhiteKey'} style={{ textAlign: 'center', padding: '20px' }}>{note}</div>
        </div>
    )

}

export default WhiteKey;