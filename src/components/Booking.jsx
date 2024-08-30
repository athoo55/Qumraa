import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  
    preferredDate: '',
    sessionType: '', // إضافة حالة لإدارة نوع الجلسة
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://x8ki-letl-twmt.n7.xano.io/api:RGlZFTKX/bookings', {
      ...formData,
      photographerId: id,
    })
    .then(response => {
      setSuccessMessage(`Thank you for booking a ${formData.sessionType} session, ${formData.name}! We appreciate your trust in Qumra.`);
    })
    .catch(error => {
      console.error('Error making booking:', error);
      alert('Failed to make booking');
    });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        {successMessage && (
          <div className="text-center text-green-600 text-2xl font-bold mb-4">
            {successMessage}
          </div>
        )}
        <h1 className="text-3xl font-bold text-center mb-6">Book a Session</h1>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="preferredDate">Preferred Date</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="sessionType">Session Type</label>
            <select
              id="sessionType"
              name="sessionType"
              value={formData.sessionType}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            >
              <option value="" disabled>Select a session type</option>
              <option value="Food">Dining session</option>
              <option value="Wedding">Wedding session</option>
              <option value="Birthday">Birthday session</option>
              <option value="Graduation">Graduation session</option>
              <option value="Conference">Fashion session</option>
              <option value="Conference">Conference or party session</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-300 text-white py-2 px-4 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
          >
            Submit Booking 
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
