import Image from 'next/image'
import styles from './page.module.css'
import * as Tone from 'tone'

export default function Home() {

  // const channelOne = new Tone.Player("").toDestination();
  // const osc = new Tone.Oscillator().toDestination().start();
  const player = new Tone.Player({
    url: "/tonejs/public/83 BPM Hip hop chilled.wav",
    loop: true,
    loopStart: 0.5,
    loopEnd: 0.7,
  }).toDestination();


  async function playSynth() {
    console.log('Before Tone.start()');
    await Tone.start();
    console.log('After Tone.start()');
  }


  return (
    <main className={styles.main}>
      <p>TEST</p>
      <button type='submit' onClick={playSynth}>Play</button>
    </main>
  )
}
