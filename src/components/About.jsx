
import React from 'react';
import image1 from '../assets/images/Your Romantic Honeymoon in Europe Itinerary Curated – Travel Curator.jpeg'
import image2 from '../assets/images/The ultimate Amalfi Coast guide.jpeg'
import image3 from '../assets/images/neom-jTxhUMyPTrE-unsplash.jpg'

const About = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-poppins">
          About Us
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-500 font-roboto">
          Welcome to our travel website! We are dedicated to bringing you the best travel experiences around the world. Whether you're looking for adventure, relaxation, or a little bit of both, we've got you covered.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-lora font-bold">
          <div className="relative group">
            <img
              src={image1}
              alt="Destination 1"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
              <h3 className="text-lg font-medium text-white">Different Countries</h3>
            </div>
          </div>
          <div className="relative group f">
            <img
              src={image2}
              alt="Destination 2"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
              <h3 className="text-lg font-medium text-white">Coast Adventures</h3>
            </div>
          </div>
          <div className="relative group">
            <img
              src={image3}
              alt="Destination 3"
              className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-75 p-4 rounded-b-lg">
              <h3 className="text-lg font-medium text-white">Marine Experiences</h3>
            </div>
          </div>
        </div>
        <div className="mt-8 text-lg text-gray-500 font-merriweather">
          <p>
            Our team of experienced travel experts is passionate about exploring the world and sharing our knowledge with you. We believe that travel has the power to transform lives and create lasting memories.
          </p>
          <p className="mt-4">
            Join us on a journey to discover new destinations, experience different cultures, and create unforgettable adventures. Whether you're planning your next vacation or just dreaming about it, we're here to inspire and guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

