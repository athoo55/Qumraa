import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Login = ({ toggleLogin }) => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { photo, name, age, price };
    localStorage.setItem('loggedInPhotographer', JSON.stringify(userData));
    toggleLogin();
  };

  const pageSpecificStyles = () => {
    if (location.pathname === '/photographers' || location.pathname === '/category') {
      return 'bg-gray-900 text-white';
    } else {
      return 'bg-white text-black';
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`p-8 rounded-lg shadow-lg ${pageSpecificStyles()}`}>
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Photo URL:</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">Login</button>
        </form>
        <button onClick={toggleLogin} className="mt-4 text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default Login;
