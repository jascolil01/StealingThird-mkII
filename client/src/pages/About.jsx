import Drums from '../components/Drums'
import Bass from '../components/Bass'
import Singer from '../components/Singer'
import Guitar from '../components/Guitar'
import Guitar2 from '../components/Guitar2'
import Contact from '../components/Contact'
import DrumIco from '../assets/2884355.png'
import BassIco from '../assets/8613965.png'
import MicroIco from '../assets/3616721.png'
import GuitarIco from '../assets/93022.png'
import ContactInfo from '../assets/2751408-200.png'
import { useState, useEffect } from "react";

export default function About() {

  const [drum, setDrum] = useState(false)
  const [singer, setSinger] = useState(false)
  const [guitar, setGuitar] = useState(false)
  const [guitar2, setGuitar2] = useState(false)
  const [bass, setBass] = useState(false)
  const [contact, setContact] = useState(false)



  const handleClick = (x) => {
    if (x === 1) {
      setBass((current) => !current)
      setContact(setGuitar2(setSinger(setGuitar(setDrum(false)))))
    } else if (x === 2) {
      setDrum((current) => !current)
      setContact(setGuitar2(setSinger(setBass(setGuitar(false)))))
    } else if (x === 3) {
      setSinger((current) => !current)
      setContact(setGuitar2(setGuitar(setDrum(setBass(false)))))
    } else if (x === 4) {
      setGuitar((current) => !current)
      setContact(setGuitar2(setDrum(setBass(setSinger(false)))))
    } else if (x === 5) {
      setGuitar2((current) => !current)
      setContact(setGuitar(setDrum(setBass(setSinger(false)))))
    } else if (x === 6) {
      setContact((current) => !current)
      setGuitar2(setGuitar(setDrum(setBass(setSinger(false)))))
    }
  }
  return (
    <div className='crew'>
      <button onClick={() => newFunc("Bass")}>test</button>
      <h1 style={{ backgroundColor: '#231f20', borderRadius: 20, padding: 10, margin: 10, border: '1px solid white', }}>Meet the crew</h1>
      <div className='mrStark'>
        <div className="about">
          <div onClick={() => handleClick(1)} className='test'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={BassIco} alt="bass" className="bass" />
          </div>
          <div onClick={() => handleClick(2)} className='test'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={DrumIco} alt="drums" className="drums" />
          </div>
          <div onClick={() => handleClick(6)} className='test'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={ContactInfo} alt="contactInfo" className="drums" />
          </div>
        </div>
        <div className='adtr'>
          {
            drum ? (<div className="member">
              <Drums /></div>
            ) : guitar ? (
              <div className="member">
                <Guitar /></div>
            ) : guitar2 ? (
              <div className="member">
                <Guitar2 /></div>
            ) : bass ? (
              <div className="member"><Bass /></div>)
              : singer ? (
                <div className="member"><Singer /></div>)
                : contact ? (
                  <div className="member"><Contact /></div>
                ) : (
                  <div className="member blank"></div>
                )
          }</div>
        <div className="about">
          <div onClick={() => handleClick(3)} className='test'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={MicroIco} alt="singer" className="singer" />
          </div>
          <div onClick={() => handleClick(4)} className='test'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={GuitarIco} alt="guitar" className="guitar" />
          </div>
          <div onClick={() => handleClick(5)} className='test'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={GuitarIco} alt="guitar" className="guitar" />
          </div>
        </div>
      </div>
    </div >
  )
}
