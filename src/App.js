import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView";
import StartView from "./views/StartView";

const App = () => {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/zoomgame" element={<MainView />}></Route>
        <Route path="/start" element={<StartView />}></Route>
      </Routes>
    </div>
  );
};

export default App;
