import './App.css'
import BandLogo from './assets/Screenshot 2023-09-30 232830.png'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={BandLogo} alt="band logo" style={{ width: 150, height: 150, borderRadius: 10000, justifySelf: 'flex-start', padding: 10 }} /> */}
        <span data-text='S'>S</span>
        <span data-text='T'>T</span>
        <span data-text='E'>E</span>
        <span data-text='A'>A</span>
        <span data-text='L'>L</span>
        <span data-text='I'>I</span>
        <span data-text='N'>N</span>
        <span data-text='G'>G</span>
        <span data-text=''> </span>
        <span data-text='T'>T</span>
        <span data-text='H'>H</span>
        <span data-text='I'>I</span>
        <span data-text='R'>R</span>
        <span data-text='D'>D</span>
      </header>
      <Home />
      <footer></footer>
    </div>
  )
}

export default App
