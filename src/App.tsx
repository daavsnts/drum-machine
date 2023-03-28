import { useState } from 'react'
import './App.css'
import Bank from './components/bank/Bank'
import Controls from './components/controls/Controls'

function App() {
  const [played, setPlayed] = useState("")

  return (
    <div className="App">
      <div id="drum-machine">
        <Bank setPlayed={setPlayed}/>
        <Controls played={played}/>
      </div>
    </div>
  )
}

export default App
