import './App.css';
import CategorySection from './components/CategorySection';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <CategorySection />
        <ProfileSection />
        <Contact />
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
