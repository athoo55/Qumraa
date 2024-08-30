import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Photographers from './Photographers';

const PhotographerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photographer, setPhotographer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotographerDetails = async () => {
      try {
        // جلب البيانات الأساسية للمصور
        const photographerResponse = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:RGlZFTKX/photographers/${id}`);
        
        // جلب صور عمل المصور من جدول الصور بناءً على photographers_id
        const photosResponse = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:RGlZFTKX/photos_table`, {
          params: { photographers_id: id }
        });
        console.log(photosResponse.data);
        
        // جمع البيانات في كائن واحد
        const photographerData = {
          ...photographerResponse.data,
          photos: photosResponse.data,
        };
        
        setPhotographer(photographerData);
      } catch (error) {
        setError('Error fetching photographer details');
        console.error(error);
      }
    };

    fetchPhotographerDetails();
  }, [id]);

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

  if (error) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 mt-10 mb-8 text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
          <button className="bg-yellow-300 text-white py-2 px-6 rounded-lg mt-4" onClick={() => navigate('/')}>
            Go Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!photographer) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 mt-10 mb-8 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 mt-10 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg md:p-8 flex flex-col items-center">
          <div className="w-full max-w-3xl mb-6 md:mb-8">
            {Array.isArray(photographer.photos) && photographer.photos.length > 0 ? (
              <Slider {...sliderSettings}>
                {photographer.photos.map((photo, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={photo.photo.url} // تأكد من أن هذا هو الحقل الصحيح للصور
                      alt={`Photographer Work ${index + 1}`}
                      className="w-full h-60 object-cover rounded-lg shadow-md md:w-[700px] md:h-96 border-2 shadow-yellow-300 border-yellow-300"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="text-center">No images available</div>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center mb-6 w-full max-w-3xl">
            <img
               src={photographer.profile_picture.url} // تأكد من أن هذا هو الحقل الصحيح للصورة الشخصية
              alt={photographer.name}
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-yellow-300"
            />
            <div className="mt-4 md:mt-0 text-center md:text-left md:ml-8">
              <h1 className="text-2xl font-bold mb-2">{photographer.name}</h1>
              <div className="flex justify-center items-center mb-4">
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
              <p className="text-lg font-semibold mb-2">Session Price: ${photographer.rate}</p>
            </div>
          </div>
          {
                photographer.description
              }
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Where I Work</h2>
            <ul className="list-disc list-inside mx-4">
              {
                photographer.locations
              }
            </ul>
          </div>

          <button
            className="bg-yellow-300 text-white py-2 px-6 rounded-lg"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhotographerDetails;
