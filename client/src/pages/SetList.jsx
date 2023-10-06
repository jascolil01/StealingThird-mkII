import WreckMe from '../assets/Wreck-Me.wav'
import SweetChild from '../assets/Sweet-Child.wav'
import HashPipe from '../assets/Hash-Pipe.wav'
import Slide from '../assets/Slide.wav'
import PinkHouses from '../assets/Pink-Houses.wav'
import InterstateLove from '../assets/Interstate-Love.wav'
import { useState } from 'react'

export default function SetList() {
  const [songTitle, setSongTitle] = useState('')
  const [bandName, setBandName] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [wreckMe, setWreckMe] = useState({
    audio: new Audio(WreckMe),
  })
  const [sweetChild, setSweetChild] = useState({
    audio: new Audio(SweetChild),
  })
  const [hashPipe, setHashPipe] = useState({
    audio: new Audio(HashPipe),
  })
  const [interstateLove, setInterstateLove] = useState({
    audio: new Audio(InterstateLove),
  })
  const [slide, setSlide] = useState({
    audio: new Audio(Slide),
  })
  const [pinkHouses, setPinkHouses] = useState({
    audio: new Audio(PinkHouses),
  })

  function playPause(x) {
    if (isPlaying) {
      wreckMe.audio.pause()
      sweetChild.audio.pause()
      hashPipe.audio.pause()
      interstateLove.audio.pause()
      slide.audio.pause()
      pinkHouses.audio.pause()
      setIsPlaying(false)
      setBandName('')
      setSongTitle('')
    } else {
      if (x === 1) {
        wreckMe.audio.play()
        setSongTitle('Wreck Me')
        setBandName('Tom Petty')
        setIsPlaying(true)
      } else if (x === 2) {
        sweetChild.audio.play()
        setSongTitle("Sweet Child O' Mine")
        setBandName(`Guns N' Rose`)
        setIsPlaying(true)
      } else if (x === 3) {
        hashPipe.audio.play()
        setSongTitle("Hash Pipe")
        setBandName(`Weezer`)
        setIsPlaying(true)
      } else if (x === 4) {
        interstateLove.audio.play()
        setSongTitle("Interstate Love")
        setBandName(`Stone Temple Pilots`)
        setIsPlaying(true)
      } else if (x === 5) {
        slide.audio.play()
        setSongTitle("Slide")
        setBandName(`Goo Goo Dolls`)
        setIsPlaying(true)
      } else if (x === 6) {
        pinkHouses.audio.play()
        setSongTitle("Pink Houses")
        setBandName(`John Mellencamp`)
        setIsPlaying(true)
      }
    }
  }
  function restart(x) {
    if (x === 1) {
      wreckMe.audio.load()
      setBandName('')
      setSongTitle('')
      setIsPlaying(false)
    } else if (x === 2) {
      sweetChild.audio.load()
      setBandName('')
      setSongTitle('')
      setIsPlaying(false)
    } else if (x === 3) {
      hashPipe.audio.load()
      setBandName('')
      setSongTitle('')
      setIsPlaying(false)
    } else if (x === 4) {
      interstateLove.audio.load()
      setBandName('')
      setSongTitle('')
      setIsPlaying(false)
    }
  }

  return (
    <div className='setList'>
      <h1>Song List</h1>
      <p className='kratos'>
        <p className="atreus">
          {isPlaying ?
            `${songTitle} by ${bandName} is playing` :
            "No songs playing"}
        </p>
      </p>
      <div className="songList">
        <div className="song TP">
          <div className="songInfo WM">
            <h2> Wreck Me Cover</h2>
            <h3>Orignial song by Tom Petty & The Heartbreakers</h3>
            <button onClick={() => playPause(1)}>Play | Pause</button>
            <button onClick={() => restart(1)}>Restart</button></div>
        </div>
        <div className="song GnR">
          <div className="songInfo SC">
            <h2> Sweet Child O' Mine Cover</h2>
            <h3>Orignial song by Guns N' Roses</h3>
            <button onClick={() => playPause(2)}>Play | Pause</button>
            <button onClick={() => restart(2)}>Restart</button>
          </div>
        </div>
        <div className="song W">
          <div className="songInfo HP">
            <h2> Hash Pipe Cover</h2>
            <h3>Orignial song by Weezer</h3>
            <button onClick={() => playPause(3)}>Play | Pause</button>
            <button onClick={() => restart(3)}>Restart</button>
          </div>
        </div>
        <div className="song STP">
          <div className="songInfo IL">
            <h2> Interstate Love Cover</h2>
            <h3>Orignial song by Stone Temple Pilots</h3>
            <button onClick={() => playPause(4)}>Play | Pause</button>
            <button onClick={() => restart(4)}>Restart</button>
          </div>
        </div>
        <div className="song GGD">
          <div className="songInfo S">
            <h2> Slide Cover</h2>
            <h3>Orignial song by Goo Goo Dolls</h3>
            <button onClick={() => playPause(5)}>Play | Pause</button>
            <button onClick={() => restart(5)}>Restart</button>
          </div>
        </div>
        <div className="song JM">
          <div className="songInfo PH">
            <h2> Pink Houses Cover</h2>
            <h3>Orignial song by John Mellencamp</h3>
            <button onClick={() => playPause(6)}>Play | Pause</button>
            <button onClick={() => restart(6)}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
