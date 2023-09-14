import './App.css'
import headshot from './images/me.png'

function App() {
  return (
    <>
      <h1>Mike Pozna</h1>
      <h2>Full Stack Developer</h2>
      <img src={headshot} alt='headshot' className='headshot' />
    </>
  )
}

export default App
