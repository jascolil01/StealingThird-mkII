import BandPhoto from '../assets/Screenshot 2023-09-30 232830.png'

export default function Contact() {
  return (
    <div className="info">
      <img src={BandPhoto} alt='profile pic' />
      <h1>Feel free to email us!</h1>
      <h2><a className='contact' href='mailto: stealingthirdbandne@gmail.com'>Click here to email us!</a></h2>
      <h1>Our Facebook Page <a style={{ padding: 10 }} className='contact' href="https://www.facebook.com/profile.php?id=100090357458006">here</a></h1>
    </div>
  )
}
