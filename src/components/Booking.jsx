import React, { useState } from 'react';  
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import { useParams } from 'react-router-dom'; 
import data from '../data/photographer'; 

const Booking = () => {
  const { id } = useParams(); 
  const photographer = data.find(p => p.id === id);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted!'); 
  };

  if (!photographer) {
    return <div>Photographer not found</div>;
  }

  return (
    <div>
      <Header />  
      <div className="container mx-auto px-6 mt-12 mb-12 md:px-10 md:mt-16 md:mb-14 lg:px-16 lg:mt-20 lg:mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg md:p-10 lg:p-12">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl font-semibold mb-2 md:text-3xl lg:text-4xl">Book {photographer.title}</h2>
            <p className="text-sm md:text-lg lg:text-xl">Fill out the form below to book your session with {photographer.title}.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm md:text-base lg:text-lg">Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm md:text-base lg:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm md:text-base lg:text-lg">Your Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm md:text-base lg:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm md:text-base lg:text-lg">Preferred Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm md:text-base lg:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-sm md:text-base lg:text-lg">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-sm md:text-base lg:text-lg"
                rows="4"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-yellow-300 text-white py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />  
    </div>
  );
};

export default Booking;
