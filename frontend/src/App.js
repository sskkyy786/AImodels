import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./components/Explore";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}
