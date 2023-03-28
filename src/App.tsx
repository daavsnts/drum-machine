import { useState } from 'react'
import './App.css'
import Bank from './components/bank/Bank'
import Controls from './components/controls/Controls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="drum-machine">
        <Bank/>
        <Controls/>
      </div>
    </div>
  )
}

export default App
