import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaSearch, FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import data from '../data/photographer';

const Photographers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loggedInPhotographer, setLoggedInPhotographer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('loggedInPhotographer');
    if (storedUserData) {
      setLoggedInPhotographer(JSON.parse(storedUserData));
    }
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPhotographers = data.filter(photographer =>
    photographer.title && photographer.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                className='border-4 border-gray-300 p-2 rounded-lg w-full md:w-3/4 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-yellow-300'
                value={searchQuery}
                onChange={handleSearch}
              />
              <FaSearch className="text-2xl text-yellow-400 cursor-pointer" /> {/* تكبير حجم الأيقونة */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {loggedInPhotographer && (
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:bg-yellow-300 hover:text-black transition duration-300">
                <div className='flex justify-center mb-4'>
                  <img
                    src={loggedInPhotographer.photo}
                    alt={loggedInPhotographer.name}
                    className="h-40 w-40 object-cover shadow-lg border-4 border-yellow-300 rounded-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className='text-center'>
                  <h3 className="text-xl font-bold mb-2">{loggedInPhotographer.name}</h3>
                  <p>Age: {loggedInPhotographer.age}</p>
                  <p className="text-lg font-bold mb-4">${loggedInPhotographer.price}</p>
                  <button
                    className='bg-yellow-300 text-white py-2 px-4 rounded-lg'
                    onClick={() => handleViewDetails(loggedInPhotographer.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            )}
            {filteredPhotographers.map(photographer => (
              <div key={photographer.id} className="bg-white rounded-2xl shadow-xl p-6 hover:bg-yellow-300 hover:text-black transition duration-300">
                <div className='flex justify-center mb-4'>
                  <img
                    src={photographer.photo}
                    alt={photographer.title}
                    className="h-40 w-40 object-cover shadow-lg border-4 border-yellow-300 rounded-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className='text-center'>
                  <h3 className="text-xl font-bold mb-2">{photographer.title}</h3>
                  <div className="flex justify-center items-center m-2">
                    {[...Array(Math.floor(photographer.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 " />
                    ))}
                    <span className="ml-2">{photographer.rating}</span>
                    {photographer.price !== undefined && (
                      <p className="text-lg font-bold ml-10">${photographer.price}</p>
                    )}
                  </div>
                  <button
                    className='bg-yellow-300 text-white py-2 px-4 rounded-lg'
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
