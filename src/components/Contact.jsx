import React from "react";
import logo from "../assets/images/logo_fo_sharda-removebg-preview.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ishaan from '../assets/images/ISHAAN sir.webp'
import meenakshi from '../assets/images/Meenakshi.png'

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 14.6898,
  lng: -17.0868,
};

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center mb-6 justify-center">
            <img
              src={ishaan}
              alt="Owner"
              className="w-40 h-40 border border-3 rounded-full shadow-md mb-4 md:mb-0 md:mr-4"
            />
            <img
              src={meenakshi}
              alt="Owner"
              className="w-40 h-40 border border-3 rounded-full shadow-md mb-4 md:mb-0 md:mr-4"
            />
            
          </div>
          <div className="space-y-4 mb-6">
            <p className="text-lg">
              Welcome to our tourism website! We are dedicated to providing you
              with the best travel experiences. Whether you're looking for
              adventure, relaxation, or a bit of both, we've got you covered.
            </p>
            <p className="text-lg">
              Our team is passionate about travel and we love sharing our
              knowledge and experiences with you. Meet our founder and owner:
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">Mr. BHUPENDRA KUMAR (ISHAAN)</strong> - Founder
            </p>
            <p className="text-lg">
            Embarking on a journey fueled by passion, Mr. Bhupendra Kumar stands as the visionary force behind Bluejay Travels. 
                His
              passion for exploring new places and cultures is the driving force
              behind our company. He believes in creating personalized travel
              experiences that cater to the unique needs and desires of each
              traveler.
            </p>
            <p className="text-lg">
              <strong className="text-blue-400">MEENAKSHI</strong> - CFO
            </p>
            <p className="text-lg">
            As the Chief Financial Officer of Bluejay Travels, Ms. Meenakshi Ajaniya stands at the forefront of financial leadership, embodying the quintessence of a modern CFO. With unwavering commitment to security and a sharp focus on strategic financial management, Ms. Ajaniya plays a pivotal role in guiding Bluejay Travels to new heights.
            </p>
            <hr className="border-4"/>
            <p className="text-lg">
              If you have any questions or need assistance planning your next
              trip, feel free to reach out to us at:
            </p>
            <p className="text-lg">
              <strong>Email:</strong> salesabj@shardatravel.com
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> +01 222 3333 / (+91) 8234567863
            </p>
            <p className="text-lg">
              We look forward to helping you create unforgettable travel
              memories!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Location</h3>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
      <footer className="section-p1 bg-blue-200 flex flex-col gap-5 p-11 justify-around font-poppins md:flex-row">
        <div className="col">
          <img className="logo w-[100px]" src={logo} alt="logo" height="80px" />
          <h4 className="font-bold my-5">Connect With Sharda Travel</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i>{" "}
            <strong>Home Office Address:</strong> 53 Avenue- 1er étage, Lamine
            Gueye, Sandaga, Dakar, SENEGAL{" "}
          </p>
          <p>
            <i className="fas fa-phone fa-rotate-90"></i>{" "}
            <strong>Phone:</strong> +01 222 3333 / (+91) 8234567863
          </p>
          <p>
            <i className="fas fa-phone fa-rotate-90"></i>{" "}
            <strong>Phone:</strong> +01 222 3333 / (+91) 8234567863
          </p>
          <p>
            <i className="fas fa-envelope"></i> <strong>Mail Us:</strong>{" "}
            salesabj@shardatravel.com
          </p>
        </div>
        <div className="follow">
          <h4 className="font-bold">Connect With Sharda Travel</h4>
          <div className="icon text-black flex gap-2">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>

        <div className="col flex flex-col">
          <h4 className="font-bold">Quick Links</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
