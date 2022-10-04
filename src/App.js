import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import News from './pages/about/News';
import NewsDetails from './pages/about/NewsDetails';
import ScholashipDetails from './pages/about/ScholashipDetails';
import Services from './pages/about/Services';
import Landing from './pages/landing/Landing';
import ForgotPassword from './pages/Login/ForgotPassword';
import Login from './pages/Login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='news' element={<News />} />
            <Route path='news-details' element={<NewsDetails />} />
            <Route path='scholar-details' element={<ScholashipDetails />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
