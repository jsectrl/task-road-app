import "./App.css";

import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="w-full h-screen px-8 sm:px-12 md:px-16 lg:px-20 bg-black">
        <Board />
      </div>
    </>
  );
}

export default App;
