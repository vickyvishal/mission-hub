import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Listing, Detail, Simulator } from "@/pages/";
import useMissions from "@/hooks/useMissions";

function App() {
  const { missions, status } = useMissions();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Listing missions={missions} status={status} />}
          errorElement={<>Something went wrong</>}
        />
        <Route
          path="/mission/:missionId"
          element={<Detail missions={missions} />}
          errorElement={<>Something went wrong</>} //error element doesn't exist
        />
        <Route path="/simulator" element={<Simulator />} />
      </Routes>
    </Router>
  );
}

export default App;
