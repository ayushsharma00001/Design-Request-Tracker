import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddRequest from './pages/AddRequest';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRequest />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;