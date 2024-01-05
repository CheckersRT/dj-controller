import * as Tone from 'tone'

const player = new Tone.Player({
    url: "https://tonejs.github.io/audio/loop/FWDL.mp3",
    loop: true,
    loopStart: 0.5,
    loopEnd: 0.7,
}).toDestination();

document.querySelector("#playButton").addEventListener("start", () => player.start());
