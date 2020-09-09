const audio = (frequency, playing) => {
    console.log('titi')
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = audioCtx.createOscillator();
    osc1.start();
    osc1.frequency.value = frequency

    if (playing) osc1.connect(audioCtx.destination)
    else osc1.disconnect(audioCtx.destination)
}

export default audio;