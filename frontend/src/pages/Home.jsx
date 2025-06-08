import { useEffect, useState } from 'react';
import axios from '../api/axios';
import RequestCard from '../components/RequestCard';

const Home = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const { data } = await axios.get('/requests');
      setRequests(data);
    } catch (err) {
      console.error('Error fetching requests');
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Design Requests</h1>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((request) => (
          <RequestCard key={request._id} request={request} refresh={fetchRequests} />
        ))
      )}
    </div>
  );
};

export default Home;
