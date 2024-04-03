import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtDecorPage from "./components/ArtDecorPage/ArtDecorPage";
import BrandingPage from "./components/BrandingPage/BrandingPage";
import UIUXPage from "./components/UiUxDesignPage/UIUXPage";
import BusinessBrandingPage from "./components/BusinessBrandingPage/BusinessBrandingPage";
import PromoBannersPage from "./components/PromoBannersPage/PromoBannersPage";
import HomePage from "./components/HomePage/HomePage";
import CinemetographyPage from "./components/CinemetographyPage/CinemetographyPage";
import StandeesPage from "./components/StandeesPage/StandeesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/uiux" element={<UIUXPage />} />
        <Route path="/businessbranding" element={<BusinessBrandingPage />} />
        <Route path="/promobanners" element={<PromoBannersPage />} />
        <Route path="/artdecor" element={<ArtDecorPage />} />
        <Route path="/cinemetography" element={<CinemetographyPage />} />
        <Route path="/standee" element={<StandeesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
