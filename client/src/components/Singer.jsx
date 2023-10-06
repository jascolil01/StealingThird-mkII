import SingerPhoto from '../assets/Screenshot 2023-09-30 225830.png'

export default function Singer() {
  return (
    <div className="info">
      <img src={SingerPhoto} alt='profile pic' />
      <h1>Name</h1>
      <h2>Maria Furnari</h2>
      <h1>Instrument</h1>
      <h2>Singer</h2>
    </div>
  )
}
