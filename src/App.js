import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import PageCV from "./pages/PageCV";
import Portfolio from "./pages/Portfolio";

// components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageCV" element={<PageCV />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
