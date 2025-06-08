import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 mb-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-blue-600">Design Request Tracker</Link>
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add Request</Link>
      </div>
    </nav>
  );
};

export default Navbar;