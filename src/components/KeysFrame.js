import React, { useState, useEffect } from 'react';
import Keys from './Keys';
import audio from './audio'
import './key.css';

const keysList = [
    { note: 'F', keyboard: 'f', color: 'white' },
    { note: 'G', keyboard: 'g', color: 'white' },
    { note: 'A', keyboard: 'h', color: 'white' },
    { note: 'B', keyboard: 'j', color: 'white' },
    { note: 'C', keyboard: 'k', color: 'white' },
    { note: 'D', keyboard: 'l', color: 'white' },
    { note: 'E', keyboard: 'm', color: 'white' },
    { note: 'F#', align: 'flex-end', keyboard: 't', color: 'black' },
    { note: 'G#', align: 'center', keyboard: 'y', color: 'black' },
    { note: 'A#', align: 'flex-start', keyboard: 'u', color: 'black' },
    { note: 'C#', align: 'flex-end', keyboard: 'o', color: 'black' },
    { note: 'D#', align: 'flex-start', keyboard: 'p', color: 'black' }
]

const KeysFrame = () => {
    const [pressedKeys, setPressedKeys] = useState([]);
    const ALLOWED_KEYS = ['f', 'g', 'h', 'j', 'k', 'l', 'm', 't', 'y', 'u', 'o', 'p']

    useEffect(() => {
        const onKeyDown = ({ key }) => {
            if (ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
                setPressedKeys(previousPressedKeys => [...previousPressedKeys, key]);
                audio(440, true)
            }
        }

        const onKeyUp = ({ key }) => {
            if (ALLOWED_KEYS.includes(key)) {
                setPressedKeys(previousPressedKeys => previousPressedKeys.filter(k => k !== key));
                audio(440, false)
            }
        }

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        }
    });

    return (
        <div style={{ width: '70%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#171419', padding: '5px', color: 'white' }}>
            <div style={{ width: '100%', height: '25%', marginBottom: '5px'}}>
                <Keys keys={keysList.filter(key => key.color === 'black')} pressedKeys={pressedKeys} color={'black'}/>
            </div>
            <div style={{ width: '100%', height: '75%', display: 'flex', justifyContent: 'space-between' }}>
                <Keys keys={keysList.filter(key => key.color === 'white')} pressedKeys={pressedKeys} color={'white'}/>
            </div>
        </div>
    )
}

export default KeysFrame;