const audio = (osc, status) => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = audioCtx.createOscillator();
    osc1.start();
    if (status === 'play') {
        osc1.connect(audioCtx.destination);
        console.log('connected');
    } else if (status === 'stop') {
        osc1.disconnect(audioCtx.destination);
        console.log('disconnected');
    } else {
        return;
    }
}

export default audio;