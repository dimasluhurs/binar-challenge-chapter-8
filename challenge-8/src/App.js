import PlayerList from "./component/listPlayer";
import PlayerContextProvider from "./main/mainPlayer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="table">
        <div className="table-wrapper">
          <PlayerContextProvider>
            <PlayerList />
          </PlayerContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
