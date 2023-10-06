import SetList from './SetList'
import About from './About'
import BandImg from '../assets/Resized_R.jpg'
// import bandPhoto from '../assets/bandphoto.png'

export default function Home() {
  return (
    <div className="homepage">
      <img className='bp' src={BandImg} alt='band photo' />
      <div className="row1">
        <SetList />
      </div>
      <div className="row2">
        <h2 className="home">Looking for a high-energy cover band to get your party or event rocking? Look no further than Stealing Third! With years of experience playing gigs all around town, these talented musicians know how to get a crowd up and dancing with their mix of classic and contemporary hits. With songs from the 80's, 90's, dance, country, and rock Stealing Third's dynamic sound and engaging stage presence will keep your guests entertained and on their feet all night long. Book them for your next event and get ready for them to <a href='https://www.youtube.com/@stealingthirdbandne' className='wavy' style={{ color: '#231f20' }}>steal</a> the show!</h2>
      </div>
      <About />
    </div>
  )
}
