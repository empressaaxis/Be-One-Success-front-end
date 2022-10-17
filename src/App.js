import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SideBarMentor from './components/SideBarMentor';
import About from './pages/about/About';
import News from './pages/about/News';
import NewsDetails from './pages/about/NewsDetails';
import ScholashipDetails from './pages/about/ScholashipDetails';
import Services from './pages/about/Services';
import Applications from './pages/dashboard/Applications';
import ChangePassword from './pages/dashboard/ChangePassword';
import Channels from './pages/dashboard/Channels';
import CreateProfile from './pages/dashboard/CreateProfile';
import Dashboard from './pages/dashboard/Dashboard';
import Documents from './pages/dashboard/Documents';
import Apply from './pages/dashboard/mentor/Applications';
import MentorHome from './pages/dashboard/mentor/MentorHome';
import SendMessage from './pages/dashboard/mentor/Message';
import Students from './pages/dashboard/mentor/Students';
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
            <Route path='dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
        {/* <SideBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='create-profile' element={<CreateProfile />} />
          <Route path='documents' element={<Documents />} />
          <Route path='applications' element={<Applications />} />
          <Route path='channels' element={<Channels />} />
          <Route path='change-password' element={<ChangePassword />} />
        </Routes> */}
        {/* <SideBarMentor />
        <Routes>
          <Route path='/' element={<MentorHome />} />
          <Route path='/message' element={<SendMessage />} />
          <Route path='/student' element={<Students />} />
          <Route path='/apply' element={<Apply />} />
        </Routes> */}
    </Router>
  );
}

export default App;
