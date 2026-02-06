import { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import HeartPattern from '../components/HeartPattern';

const LandingPage = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageContainer>
      <HeartPattern />
      
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="font-script text-6xl md:text-8xl text-valentine-red mb-4 animate-float">
          Love Mail
        </h1>
        <p className="font-elegant text-lg md:text-xl text-gray-600 mb-12">
          click the envelope to open
        </p>
        
        <button
          onClick={onNext}
          className="group relative transform transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Open envelope"
        >
          <div className="relative w-64 h-40 md:w-80 md:h-48">
            {/* Envelope Body */}
            <div className="absolute inset-0 bg-valentine-red rounded-lg shadow-2xl group-hover:shadow-valentine-red/50 transition-shadow duration-300">
              {/* Envelope Flap Shadow */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/10 to-transparent"></div>
              
              {/* Diagonal Lines */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute top-0 left-0 right-1/2 h-1/2 border-r-2 border-b-2 border-valentine-darkred/30 transform origin-top-right rotate-0"></div>
                <div className="absolute top-0 right-0 left-1/2 h-1/2 border-l-2 border-b-2 border-valentine-darkred/30 transform origin-top-left rotate-0"></div>
              </div>
            </div>
            
            {/* Envelope Flap */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-valentine-red to-valentine-darkred rounded-t-lg transform origin-bottom group-hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-t-lg"></div>
            </div>
            
            {/* Heart Seal */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl animate-heartbeat">
              ❤️
            </div>
          </div>
        </button>
      </div>
    </PageContainer>
  );
};

export default LandingPage;
