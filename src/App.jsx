function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">S1mple</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Draco</span>
              <span className="player-symbol">0</span>
            </span>
            <button>Edit</button>

          </li>

        </ol>
        Game Board
      </div>
    </main>
  )
}

export default App
