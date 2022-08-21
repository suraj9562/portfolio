import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={LandingPage} />
      </Routes>
    </Router>
  );
}

export default App;
