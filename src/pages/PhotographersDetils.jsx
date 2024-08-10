import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import data from '../data/photographer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotographerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const photographer = data.find(p => p.id === id);

  if (!photographer) {
    return <div>Photographer not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    centerMode: true,
    centerPadding: '0px',
    variableWidth: false,
  };

  const handleBookNow = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mt-10 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg md:p-8">
          {/* تحقق من وجود workImages */}
          {photographer.workImages && photographer.workImages.length > 0 ? (
            <Slider {...sliderSettings} className="mb-6 md:mb-8">
              {photographer.workImages.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Photographer Work ${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg shadow-md md:w-[550px] md:h-96 border-2 shadow-yellow-300 border-yellow-300"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center">No images available</div>
          )}

          <div className="flex flex-col md:flex-row items-center mb-6">
            <img
              src={photographer.photo}
              alt={photographer.title}
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-yellow-300"
            />
            <div className="mt-4 md:mt-0 text-center md:text-left md:ml-8">
              <h2 className="text-2xl font-semibold mb-2 md:text-3xl">{photographer.title}</h2>
              <div className="flex items-center justify-center md:justify-start mb-2">
                {[...Array(Math.floor(photographer.rating))].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
                <span className="ml-2 text-sm md:text-base">{photographer.rating}</span>
              </div>
              <p className="text-lg font-bold mb-2">Price: ${photographer.price}</p>
            </div>
          </div>

          <p className="text-sm md:text-base mb-8">{photographer.description}</p>

          <h3 className="text-xl font-semibold mb-4 md:text-2xl">Available Locations</h3>
          {/* تحقق من وجود places */}
          {photographer.places && photographer.places.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:grid-cols-4">
              {photographer.places.map((place, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-sm font-semibold mb-2 md:text-lg">{place.name}</h3>
                  <p className="text-xs md:text-sm">{place.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">No locations available</div>
          )}

          <div className="text-center mb-8">
            <button
              onClick={handleBookNow}
              className="bg-yellow-300 text-white py-2 px-4 rounded-lg text-sm md:text-base"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhotographerDetails;
