import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaSearch, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import axios from 'axios';

const Photographers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [photographers, setPhotographers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://x8ki-letl-twmt.n7.xano.io/api:RGlZFTKX/photographers') // رابط API الخاص بك
      .then(response => {
        console.log(response.data);
        setPhotographers(response.data);
      })
      .catch(error => console.error('Error fetching photographers:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPhotographers = photographers.filter(photographer =>
    photographer.name && photographer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (photographerId) => {
    navigate(`/photographer/${photographerId}`);
  };

  return (
    <div>
      <Header />
      <div className="mt-14 mb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 py-4">
            <h1 className="text-3xl font-medium m-5">Top Photographers</h1>
            <div className="relative flex justify-center items-center space-x-4">
              <input
                type='text'
                placeholder='Search by name'
                className='border-4 border-yellow-300 p-2 rounded-lg w-full md:w-3/4 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-yellow-300'
                value={searchQuery}
                onChange={handleSearch}
              />
              <FaSearch className="text-2xl text-yellow-400 cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredPhotographers.map(photographer => (
              <div key={photographer.id} className="bg-white rounded-2xl shadow-xl p-6 hover:bg-yellow-300 hover:text-black transition duration-300">
                <div className='flex justify-center mb-4'>
                  <img
                    src={photographer.profile_picture.url}
                    alt={photographer.name}
                    className="h-40 w-40 object-cover shadow-lg border-4 border-yellow-300 rounded-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className='text-center'>
                  <h3 className="text-xl font-bold mb-2">{photographer.name}</h3>
                  <div className="flex justify-center items-center m-2">
                    {photographer.rating && photographer.rating > 0 ? (
                      <>
                        {[...Array(Math.floor(photographer.rating))].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                        <span className="ml-2">{photographer.rating}</span>
                      </>
                    ) : (
                      <span>No rating available</span>
                    )}
                  </div>
                  <p className="text-lg font-bold">${photographer.rate}</p>
                  <button
                    className='bg-yellow-300 text-white py-2 px-4 rounded-lg mt-4'
                    onClick={() => handleViewDetails(photographer.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Photographers;
