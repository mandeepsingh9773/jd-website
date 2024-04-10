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
import ProductBookletPage from "./components/ProductBookletPage/ProductBookletPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/uiux" element={<UIUXPage />} />
        <Route path="/businessbranding" element={<BusinessBrandingPage />} />
        <Route path="/promobanners" element={<PromoBannersPage />} />
        <Route path="/art&decor" element={<ArtDecorPage />} />
        <Route path="/cinematography" element={<CinemetographyPage />} />
        <Route path="/standees" element={<StandeesPage />} />
        <Route path="/productbooklet" element={<ProductBookletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
