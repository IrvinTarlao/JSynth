import React, { useState, useEffect } from 'react';
import Keys from './Keys';
import './key.css';
// import audio from './audio';

const keysList = [
    { note: 'F', keyboard: 'f', color: 'white', frequency: 349.23 },
    { note: 'G', keyboard: 'g', color: 'white', frequency: 392 },
    { note: 'A', keyboard: 'h', color: 'white', frequency: 440 },
    { note: 'B', keyboard: 'j', color: 'white', frequency: 493.88 },
    { note: 'C', keyboard: 'k', color: 'white', frequency: 523.25 },
    { note: 'D', keyboard: 'l', color: 'white', frequency: 587.33 },
    { note: 'E', keyboard: 'm', color: 'white', frequency: 659.25 },
    { note: 'F#', align: 'flex-end', keyboard: 't', color: 'black', frequency: 369.99 },
    { note: 'G#', align: 'center', keyboard: 'y', color: 'black', frequency: 415.30 },
    { note: 'A#', align: 'flex-start', keyboard: 'u', color: 'black', frequency: 466.16 },
    { note: 'C#', align: 'flex-end', keyboard: 'o', color: 'black', frequency: 554.37 },
    { note: 'D#', align: 'flex-start', keyboard: 'p', color: 'black', frequency: 622.25 }
]

const KeysFrame = () => {
    const [pressedKeys, setPressedKeys] = useState([]);
    const ALLOWED_KEYS = ['f', 'g', 'h', 'j', 'k', 'l', 'm', 't', 'y', 'u', 'o', 'p'];

    useEffect(() => {
        const onKeyDown = ({ key }) => {
            if (ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
                setPressedKeys(previousPressedKeys => [...previousPressedKeys, key]);
            }
        }

        const onKeyUp = ({ key }) => {
            if (ALLOWED_KEYS.includes(key)) {
                setPressedKeys(previousPressedKeys => previousPressedKeys.filter(k => k !== key));
            }
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp)

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        }
    });

    return (
        <div style={{ width: '70%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#171419', padding: '5px', color: 'white' }}>
            <div style={{ width: '100%', height: '25%', marginBottom: '5px' }}>
                <Keys keys={keysList.filter(key => key.color === 'black')} pressedKeys={pressedKeys} color={'black'} />
            </div>
            <div style={{ width: '100%', height: '75%', display: 'flex', justifyContent: 'space-between' }}>
                <Keys keys={keysList.filter(key => key.color === 'white')} pressedKeys={pressedKeys} color={'white'} />
            </div>
        </div>
    )
}

export default KeysFrame;