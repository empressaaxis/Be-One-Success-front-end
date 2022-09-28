import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/landing/Landing';
import Login from './pages/Login.js/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
