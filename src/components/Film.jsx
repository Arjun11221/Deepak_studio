import React from 'react';
import ReactPlayer from 'react-player';
import video from "../assets/film.mp4";

const Film = () => {
  return (
    <div className="mt-32 px-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
        <div className="md:col-span-4 text-lg md:mt-28">
          <h2 className="text-2xl text-center tracking-wider font-semibold mb-4">
            Our <br /> Wedding <br /> Film
          </h2>
          <p className="text-center tracking-wide">
            Through the lens of a wedding film, we relive the joy, the love, and the magic of the day we said 'I do'
          </p>
        </div>
        
        <div className="relative  md:col-span-6" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            url={video}
            className="absolute top-0 left-0"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
      <hr className="mt-40" />
    </div>
  );
};

export default Film;
