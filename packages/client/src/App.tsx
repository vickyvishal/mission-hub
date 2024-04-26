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
import Simulator from "./pages/Simulator";

function App() {
  const { missions, status } = useMissions();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Listing missions={missions} status={status} />}
          errorElement={<div>Something went wrong</div>}
        />
        <Route
          path="/mission/:missionId"
          element={<Detail missions={missions} />}
        />
        <Route path="/simulator" element={<Simulator />} />
      </Routes>
    </Router>
  );
}

export default App;
