import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";
import useMissions from "./hooks/useMissions";

function App() {
  const { missions, status } = useMissions();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Listing missions={missions} status={status} />}
        />
        <Route
          path="/mission/:missionId"
          element={<Detail missions={missions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
