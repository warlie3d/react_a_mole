import { useState } from 'react'
import MoleContainer from './Components/MoleContainer'


function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div className='moleContainer'>
                {hills}
            </div>
        )
    }
  const resetGame = () => {
      setScore(0)
    }

    return (
        <div className="App">
        <h1>React-a-Mole!</h1>
        <button onClick={resetGame} >Reset</button>
           <h3>{score}</h3>
            {createMoleHill()}
        </div>
    )
}

export default App
