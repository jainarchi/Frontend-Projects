import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <>
      <div className="flex justify-center gap-2 text-white  ">
        <div className="border-3  flex items-center px-6  font-semibold uppercase rounded-full border-white hover:[border-color:#d3fd50] leading-none  ">
          <Link to='/projects' className="text-[6vw] hover:[color:#d3fd50]" >
            Works
          </Link>
        </div>
         
        <div className="border-3 flex items-center px-10  font-semibold uppercase rounded-full border-white hover:[border-color:#d3fd50] leading-none ">
          <Link to='/agence' className="text-[6vw] hover:[color:#d3fd50] ">
            Agency
          </Link>
        </div>

      </div>
      
    </>
  );
};

export default HomeBottomText;
