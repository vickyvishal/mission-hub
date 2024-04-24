import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Listing} />
        <Route path="/detail" Component={Detail} />
      </Routes>
    </Router>
  );
}

export default App;
