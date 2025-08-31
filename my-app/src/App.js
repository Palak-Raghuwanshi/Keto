
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/Company";
import Vaults from "./components/Vaults";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Company />} />
       
        <Route path="/vault" element={<Vaults />} />
      </Routes>
    </Router>
  );
}

export default App;
