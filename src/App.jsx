import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="S1mple" symbol='X' />
          <Player initialName="Draco" symbol="0" />
        </ol>
        Game Board
      </div>
    </main>
  )
}

export default App
