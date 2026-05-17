import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React , {useRef} from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  
  const imageArray =[
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  
  ]


  useGSAP(function(){
    gsap.to(imageDivRef.current , {
     scrollTrigger:{
      trigger:imageDivRef.current,                  // markers:true, 
      pin: true ,
      start: 'top 24%',
      end : 'top -70%',

      onUpdate:(e)=>{
       let imageIndex ;
       if(e.progress < 1)
          imageIndex = Math.floor(e.progress * imageArray.length); 
       else
          imageIndex = imageArray.length -1 ;
       

       imageRef.current.src = imageArray[imageIndex]


      }
     }

    })
  })



  return (
    <>
    <div className="section1  pt-1">

      <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] w-[15vw] top-[24vh] left-[28vw] rounded-3xl bg-amber-300">
        <img ref={imageRef} className="h-full  " src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>

      <div className="relative mt-[50vh] ">
        <h1 className="text-[21vw] uppercase leading-[18vw] text-center font-semibold ">
          SEVEN7Y
          <br />
          TWO
        </h1>
      </div>

      <div className="pl-[45vw] mt-4">
        <p className="text-4xl font-semibold " >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           We’re and open-minded, and we make sure creativity crowds
          out ego from every corner. A brand is a living thing, with values, a
          personality and a story. If we ignore that, we can achieve short-term
          success, but not influence that goes the distance. We bring that
          perspective to every brand story we help tell.
        </p>
      </div>

    </div>

    <div className="section2 h-screen">
      
    </div>

    </>
  );
};

export default Agence;
