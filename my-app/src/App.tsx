import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import HandleProject from './components/projects/HandleProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/project/:id" element={<HandleProject />} />
      </Routes>
  </Router>
  );
}

export default App;
