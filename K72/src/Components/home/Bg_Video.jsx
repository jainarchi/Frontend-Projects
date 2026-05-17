import React from 'react';
import bgVideo from '../../assets/bg_video.mp4';



const Bg_Video = () => {
  return (
    <div className="absolute inset-0"> 
     
      <video className="w-full h-full object-cover overflow-hidden" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Bg_Video;



   
   