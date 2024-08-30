import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profile_picture: null,
    rating: '',
    rate: '',
    description: '',
    photo: [],
    locations: [],
  });

  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_picture: e.target.files[0],
    });
  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      photo: [...e.target.files],
    });
  };

  const handleLocationsChange = (e) => {
    setFormData({
      ...formData,
      locations: e.target.value.split(',').map(location => location.trim()),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('password', formData.password);
    if (formData.profile_picture) {
      submitData.append('profile_picture', formData.profile_picture);
    }
    submitData.append('rating', formData.rating);
    submitData.append('rate', formData.rate);
    submitData.append('description', formData.description);
    formData.photo.forEach((photo, index) => {
      submitData.append(`photo_${index}`, photo);
    });
    submitData.append('locations', JSON.stringify(formData.locations));

    axios.post('https://x8ki-letl-twmt.n7.xano.io/api:RGlZFTKX/photographers', submitData)
      .then(response => {
        setWelcomeMessage(`Welcome to the Qumra, ${formData.name}!`);
        setTimeout(() => {
          navigate('/photographers');
        }, 2000); // تأخير 2 ثانية قبل الانتقال
      })
      .catch(error => {
        console.error('Registration error:', error.response ? error.response.data : error.message);
        alert('فشل التسجيل.');
      });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        {welcomeMessage && (
          <div className="text-center text-green-600 text-2xl font-bold mb-4">
            {welcomeMessage}
          </div>
        )}
        <h1 className="text-3xl font-bold text-center mb-6">Register as a Photographer</h1>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="profile_picture">Profile Picture</label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rate">Session Price ($)</label>
            <input
              type="number"
              id="rate"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">Work Photos</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handlePhotoChange}
              multiple
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="locations">Locations</label>
            <input
              type="text"
              id="locations"
              name="locations"
              value={formData.locations.join(', ')}
              onChange={handleLocationsChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter locations separated by commas"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-300 text-white py-2 px-4 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
