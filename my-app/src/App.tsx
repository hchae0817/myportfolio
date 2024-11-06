import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import AnimalProject from './components/projects/AnimalProject';

function App() {
  return (

    <Router>
    <div>
      <Routes>
        {/* Define the route for the project list */}
        <Route path="/" element={<Profile />} />

        {/* Define the route for a single project page */}
        <Route path="/project/:id" element={<AnimalProject />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
