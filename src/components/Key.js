import React, { useState, useEffect } from 'react';

const Key = ({ playKey, color }) => {

    const [pressed, setPressed] = useState(false);

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.005;
    osc.type = 'square';
    osc.frequency.value = playKey.frequency;
    osc.start();

    useEffect(() => {
        document.addEventListener('keydown', e => {
            if (e.key === playKey.keyboard) {
                if (e.repeat) return;
                else {
                    setPressed(true);
                    osc.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                };
            };
        });
    
        document.addEventListener('keyup', e => {
            if (e.key === playKey.keyboard) {
                if (e.repeat) return;
                else { setPressed(false); osc.disconnect() };
            };
        });
    });

    

    if (color === 'black') return (
        <div className={pressed ? 'outerBlackKeyPressed' : 'outerBlackKey'} style={{ justifyContent: playKey.align, width: playKey.note === 'G#' ? '50%' : '100%' }}>
            <div className={pressed ? 'innerBlackKeyPressed' : 'innerBlackKey'}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#171419', textAlign: 'center', padding: '15px' }}>{playKey.note}</div>
            </div>
        </div>
    )

    if (color === 'white') return (
        <div className={pressed ? 'outerWhiteKeyPressed' : 'outerWhiteKey'}>
            <div className={pressed ? 'innerWhiteKeyPressed' : 'innerWhiteKey'} style={{ textAlign: 'center', padding: '20px' }}>{playKey.note}</div>
        </div>
    )
}

export default Key;