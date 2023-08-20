import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';
import Onboarding from './pages/onboarding';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;