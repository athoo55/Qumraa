import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import herosection from '../components/assets/herosection.jpg';
import camera from '../components/assets/camera.jpg';
import ail from '../components/assets/ail.jpg';
import ahmed from '../components/assets/ahmed.jpg';
import ibrahim from '../components/assets/ibrahim.jpeg';
import aya from '../components/assets/aya.jpg';
import niveen from '../components/assets/niveen.jpg';

const Home = () => {
  const photographers = [
    {
      id: '1',
      name: 'Aya Hussain',
      photo: aya,
      rating: 4
    },
    {
      id: '2',
      name: 'Ali Ahmed',
      photo: ail,
      rating: 4.5
    },
    {
      id: '3',
      name: 'Noor Mohammed',
      photo: ahmed,
      rating: 4
    },
    {
      id: '4',
      name: 'Niveen Khaled',
      photo: niveen,
      rating: 5
    },
    {
      id: '5',
      name: 'Ibrahim Saleh',
      photo: ibrahim,
      rating: 4.5
    }
  ];

  return (
    <div>
      <Header />
      <section id="herosection" className='p-8'>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <div className='m-0 align-top'>
            <p className='text-black text-4xl md:text-8xl font-sans ml-2'>Qumra</p>
            <h1 className='text-black text-lg md:text-xl p-5 font-bold'>
              Documenting our most beautiful moments <br />
              with a professional photographer
            </h1>
            <Link to="/Photographers" className='font-bold text-yellow-600 opacity-100 mt-4 md:mt-7 ml-4 px-8 py-3 text-center rounded-full border-4 border-yellow-500 ease-in duration-300'>
              Start Now
            </Link>
          </div>
          <div className='my-4 mx-10 w-full md:w-1/3'>
            <img src={herosection} alt="heroimge" className='h-auto w-full md:h-[450px] md:w-[350px] object-cover shadow-lg shadow-yellow-300 border-4 border-yellow-400 rounded-full' />
          </div>
        </div>
      </section>
      <section className='p-10 m-[20px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='flex justify-center'>
            <img src={camera} alt="" className='h-auto w-full md:h-[450px] md:w-[350px] object-cover hover:scale-105 duration-700 shadow-lg shadow-yellow-300 border-yellow-300 border-4 rounded-full' />
          </div>
          <div className='mt-12 py-6'>
            <h1 className='text-3xl md:text-5xl flex justify-start m-8 mb-15 font-sans font-semibold'>Qumra</h1>
            <p className='m-8 text-lg md:text-xl font-normal flex justify-start'>
              To document your most beautiful moments <br />
              memories, and happiest times as pictures <br />
              Qamra began to realize how difficult it is to find <br /> a good photographer
              in a place that is comfortable <br /> for you to document your special moments
            </p>
            <Link to='/About' className='font-bold text-yellow-600 opacity-100 mt-4 md:mt-7 ml-4 px-8 py-3 text-center rounded-full border-4 border-yellow-500 ease-in duration-300'>
              See More
            </Link>
          </div>
        </div>
      </section>
      <section className='p-10 m-5'>
        <div className="container">
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <h1 className='text-3xl p-8 font-serif'>Best Photographers</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center'>
            {photographers.map((photog) => (
              <div key={photog.id} className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-yellow-300 hover:text-black relative shadow-xl duration-1000 group-max-w[300px]'>
                <div className='h-[100px]'>
                  <img src={photog.photo} alt={photog.name} className='h-[150px] w-[150px] object-cover shadow-lg border-4 border-yellow-300 shadow-yellow-300 block mx-auto rounded-full transform -translate-y-14 group-hover:scale-105 duration-300' />
                </div>
                <div className='p-4 text-center m-4'>
                  <h1 className='text-xl font-bold'>{photog.name}</h1>
                  <div className='w-full flex items-center justify-center'>
                    {[...Array(Math.floor(photog.rating))].map((_, i) => (
                      <FaStar key={i} className='text-yellow-300' />
                    ))}
                    {photog.rating % 1 !== 0 && (
                      <FaStar className='text-yellow-300 half' />
                    )}
                  </div>
                  <Link to='photographers'>
                    <button className='px-4 opacity-100 mt-4 md:mt-7 ml-4 py-3 text-center rounded-full border-4 border-yellow-500 ease-in duration-300'>
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center w-full mt-10'>
            <Link to='photographers' className="font-bold text-yellow-600 opacity-100 mt-4 md:mt-7 ml-4 px-8 py-3 text-center rounded-full border-4 border-yellow-500 ease-in duration-300">
              View All Photographers
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
