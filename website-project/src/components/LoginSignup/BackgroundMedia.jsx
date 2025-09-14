import bgVideo from "../../assets/bg.mp4"; 
import Princess from "../../assets/princess.mp3";
import {   useEffect, useRef } from 'react';
import '../../App.css'


export function BaxkgroundMedia() {
  const audioRef = useRef(null);
  useEffect(() => {
     const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log('Ошибка воспроизведения');
        });
      }
      
      window.removeEventListener('click', handleClick);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };

  }, []);
  
  

  return (
    <>
      <div className="app">
     <video  autoPlay loop muted playsInline className="bg-video">
    <source src={bgVideo} type="video/mp4" />
    </video>

      
      <audio ref={audioRef} loop>
        <source src={Princess} type="audio/mpeg" />
      </audio>

     
      </div>
    </>
  )
}


