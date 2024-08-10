import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import gifabout from '../components/assets/gifabout.gif';
import about2 from '../components/assets/about2.jpg';
import about3 from '../components/assets/about3.jpg';
import about4 from '../components/assets/about4.jpg';
import food from '../components/assets/food.jpg';
import about6 from '../components/assets/about6.webp';
import about7 from '../components/assets/about7.jpg';
import 'swiper/swiper-bundle.css';

const About = () => {
  return (
    <div>
      <Header />
      <section className="m-4 md:m-10 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-10">
          <div className="md:order-1 order-2">
            <h1 className="text-black font-medium text-3xl md:text-6xl p-2 mt-5">
              Hi, this is <span className="text-black font-sans">Qumra</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-normal text-black mt-3"></h2>
            <p className="text-base md:text-xl font-normal text-black">
              Here we are your preferred source to document your most beautiful moments, memories, and happiest times as pictures. Qamra began to realize how difficult it is to find a good photographer in a place that is comfortable for you to document your special moments. And more than that? You urgently need to find a good photographer who is chosen to suit you from all. We will choose the place, time, price, and all details to suit you.
            </p>
          </div>
          <div className="md:order-2 order-1 flex justify-center items-center">
            <img
              src={gifabout}
              alt="camera"
              className="rounded-full border-4 border-yellow-300 w-52 md:w-80 h-52 md:h-80 shadow-2xl shadow-yellow-400"
            />
          </div>
        </div>
        <section className="w-full">
          <h1 className="text-3xl md:text-5xl flex justify-center items-center mt-10">
            How Can Qumra Help You
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {[
              { src: about2, title:'Wedding photography', text: "  should be done by the best photographer to capture all the special moments." },
              { src: about3, title:"Birthday party photography" ,text: " should be done by the best photographer to capture all the special moments." },
              { src: about4,title:"Photographing your graduation" , text: " ceremony should be done by the best photographer to capture all the special moments." },
              { src: food, title:"Food photography" , text: "  a great way to highlight the features of your food. Professional photography of your dishes can help you attract new customers and increase sales." },
              { src: about6,title:"Photographing your graduation" , text: "If you are planning an important event, such as holding an exhibition or conference, we bring our years of experience in the field." },
              { src: about7,title:"Fashion photography" , text: " a great way to highlight the features of your outfits." }
            ].map((item, index) => (
              <div key={index} className="flex justify-center items-center flex-col">
                <img
                  src={item.src}
                  alt="Qumra image"
                  className="border-4 border-yellow-300 w-52 md:w-80 h-52 md:h-80 rounded-full shadow-xl shadow-yellow-200 mb-6"
                />
                <h1 className="font-serif text-lg md:text-3xl text-black font-medium text-center m-3">
                  {item.title}
                </h1>

                <h2 className="font-serif text-lg md:text-3xl text-black font-medium text-center">
                  {item.text}
                </h2>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default About;
