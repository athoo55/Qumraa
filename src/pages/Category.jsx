import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import camera from '../components/assets/camera.jpg';
import food from '../components/assets/food.jpg';
import gradution from '../components/assets/gradution.jpg';
import fashion from '../components/assets/fashion.jpg';
import birthday from '../components/assets/birthday.jpg';
import { Slide, Fade } from "react-awesome-reveal";
import about6 from '../components/assets/about6.webp';

const Category = () => {
  const categories = [
    { id: 1, title: 'Wedding', img: camera, desc: 'Photographers of weddings' },
    { id: 2, title: 'Food', img: food, desc: 'Photographers of food' },
    { id: 3, title: 'Graduation', img: gradution, desc: 'Photographers of graduation' },
    { id: 4, title: 'Fashion', img: fashion, desc: 'Photographers of fashion' },
    { id: 5, title: 'Birthday', img: birthday, desc: 'Photographers of birthdays' },
    { id: 6, title: 'Occasions', img: about6, desc: 'Photographers of occasions' },
  ];

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10 m-4 md:m-10">
        {categories.map(({ id, img, title, desc }) => (
          <div
            key={id}
            className="text-white shadow-md rounded-lg overflow-hidden relative group max-w-xs mx-auto"
          >
            <img
              src={img}
              alt={title}
              className="w-full  border-4 border-yellow-300 shadow-yellow-300 h-64 md:h-72 object-cover mt-5 mb-10 rounded-full"
            />
            <div className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
              <div className="space-y-4 mt-12">
                <Slide cascade>
                  <h1 className="text-xl md:text-3xl font-bold text-center">{title}</h1>
                  <Fade cascade damping={0.05} className="text-center">
                    {desc}
                  </Fade>
                  <div className="text-center">
                    <Link to='/photographers' className="border border-yellow-300 px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                      View
                    </Link>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Category;
