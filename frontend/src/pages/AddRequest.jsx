import { useState } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddRequest = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assetType: '',
    priority: 'Medium'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/requests', formData);
      toast.success('Request added!');
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err?.message || err.response?.data?.message || 'Failed to add request');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Request</h2>

      <label className="block mb-2 font-medium">Title</label>
      <input name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2 font-medium">Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2 font-medium">Asset Type</label>
      <input name="assetType" value={formData.assetType} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2 font-medium">Priority</label>
      <select name="priority" value={formData.priority} onChange={handleChange} className="w-full p-2 border rounded mb-4">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full">
        Submit Request
      </button>
    </form>
  );
};

export default AddRequest;