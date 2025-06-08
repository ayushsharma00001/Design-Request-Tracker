import { useState } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';

const RequestCard = ({ request, refresh }) => {
  const [status, setStatus] = useState(request.status);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      await axios.put(`/requests/${request._id}/status`, { status: newStatus });
      setStatus(newStatus);
      toast.success('Status updated');
      refresh();
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4 transition-transform hover:scale-[1.01]">
      <h2 className="text-lg font-semibold text-gray-800">{request.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{request.description}</p>
      <div className="flex flex-wrap gap-4 items-center">
        <span className="text-sm font-medium">Asset Type: {request.assetType}</span>
        <span className="text-sm font-medium">Priority: {request.priority}</span>
        <select value={status} onChange={handleStatusChange} className="px-2 py-1 border rounded">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default RequestCard;