import React, { useState, useEffect } from 'react';

const BlackKey = ({ playKey, pressedKeys }) => {

    const ALLOWED_KEYS = ['f', 'g', 'h', 'j', 'k', 'l', 'm', 't', 'y', 'u', 'o', 'p'];


    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.5;
    osc1.type = 'sine';
    osc1.frequency.value = playKey.frequency;
    osc1.start();

    

    const play = (e) => {
        if (e.repeat) return;
        if (e.key === playKey.keyboard) {
            osc1.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            console.log('connected', audioCtx.state);
        }
    }
    const stop = (e) => {
        if (e.repeat) return;
        if (audioCtx.state === 'running') audioCtx.suspend();
            // gainNode.disconnect();
            // osc1.stop();
            console.log('disconnected', audioCtx.state);
        // }
    }

    document.addEventListener('keydown', e => { if (ALLOWED_KEYS.includes(e.key)) play(e)});
    document.addEventListener('keyup', e => { if (ALLOWED_KEYS.includes(e.key)) stop(e)});

    return (
        <div className={pressedKeys.includes(playKey.keyboard) ? 'outerBlackKeyPressed' : 'outerBlackKey'} style={{ justifyContent: playKey.align, width: playKey.note === 'G#' ? '50%' : '100%' }}>
            <div className={pressedKeys.includes(playKey.keyboard) ? 'innerBlackKeyPressed' : 'innerBlackKey'}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#171419', textAlign: 'center', padding: '15px' }}>{playKey.note}</div>
            </div>
        </div>
    )
}

export default BlackKey;