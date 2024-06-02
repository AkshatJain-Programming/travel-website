import React from 'react'
import ImageSlider from './ImageSlider';
import image1 from '../assets/images/download (1).jpg'
import image2 from '../assets/images/shing-LjX-m_UXQGM-unsplash.jpg'
import image3 from '../assets/images/airline-tickets.webp'
import image4 from '../assets/images/neom-jTxhUMyPTrE-unsplash.jpg'
import image5 from '../assets/images/jason-mavrommatis-EwMybq5YAus-unsplash.jpg'
import abouPhoto from '../assets/images/The Ultimate Guide to Djerba, Tunisia - the blonde scout.jpeg'


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];
const Home = () => {
  return (
    <div>
      <ImageSlider images={images}/>
      <div className="about p-7 flex flex-col gap-[80px] items-center md:flex-row">
        <div className="aboutImage w-full md:w-1/2">
        <   img className='border rounded-xl' src={abouPhoto} alt="" />
        </div>
        
        <div className="aboutContent w-full md:w-1/2">
            <h2 className='text-3xl font-bold mb-7'>About Our <span className='text-blue-500'>Company</span></h2>
            <p className='text-lg'>With a passion for crafting unforgettable journeys, we specialize in personalized travel experiences tailored to your desires. From breathtaking natural landscapes to vibrant cultural encounters, we curate every aspect of your trip to perfection. Our expert team ensures seamless logistics, while our commitment to sustainability ensures your adventures leave a positive impact. Whether you're craving relaxation, adventure, or cultural immersion, let us guide you on a transformative journey of exploration and discovery. Experience the world like never before.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home
