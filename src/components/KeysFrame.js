import React from 'react';
import Key from './Key';
import './key.css';

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

    return (
        <div style={{ width: '70%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#171419', padding: '5px', color: 'white' }}>
            <div style={{ width: '100%', height: '25%', marginBottom: '5px' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                    {keysList.filter(key => key.color === 'black').map(key =>
                        <Key key={key.note} playKey={key} color={'black'} />
                    )}
                </div>
            </div>
            <div style={{ width: '100%', height: '75%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                    {keysList.filter(key => key.color === 'white').map(key =>
                        <Key key={key.note} playKey={key} color={'white'} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default KeysFrame;