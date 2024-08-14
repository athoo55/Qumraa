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
      <div className={`w-full max-w-lg p-10 rounded-xl shadow-2xl ${pageSpecificStyles()} transition-all duration-300`}>
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Photo URL:</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full p-3 border-2 border-yellow-400 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border-2 border-yellow-400 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border-2 border-yellow-400 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border-2 border-yellow-400 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-semibold text-lg"
          >
            Login
          </button>
        </form>
        <button
          onClick={toggleLogin}
          className="mt-6 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
