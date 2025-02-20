import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./components/GamePlay";


function App(){

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }



  return(
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App;

