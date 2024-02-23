import React from "react";
// import backtop from '../assets/Svg/backtopp.svg'
import { useState, useEffect } from "react";

function BackToTop() {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <div>
      {backTop ? (
        <button
          id="text"
          onClick={moveToTop}
          className="transition-all delay-300 fixed bg-[#88c701]  bottom-0 end-0 me-5 mb-4  pointer z-10 border-[3px] border-[white] rounded-[70px]  py-1 px-1  animate-bounce"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            fill="#ffff"
            viewBox="0 -960 960 960"
            width="25"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default BackToTop;
