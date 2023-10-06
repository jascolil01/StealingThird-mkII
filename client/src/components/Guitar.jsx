import GuitarPhoto from '../assets/Screenshot 2023-09-30 225851.png'

export default function Guitar() {
  return (
    <div className="info">
      <img src={GuitarPhoto} alt='profile pic' />
      <h1>Name</h1>
      <h2>Chris Schule</h2>
      <h1>Instrument</h1>
      <h2>Guitar</h2>
    </div>
  )
}
