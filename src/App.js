import './App.css';
import Branding from './components/BrandingPage/BrandingPage';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </Router>
  );
}

export default App;