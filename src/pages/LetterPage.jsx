import { useState, useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import HeartPattern from '../components/HeartPattern';
import Button from '../components/Button';
import CONFIG from '../config';

const LetterPage = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, CONFIG.timings.pageTransitionDelay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContainer>
      <HeartPattern opacity={0.3} />
      
      <div className={`relative z-10 max-w-2xl w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="bg-valentine-cream rounded-2xl shadow-2xl p-8 md:p-12 border-8 border-valentine-pink relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-valentine-red/20 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-valentine-red/20 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-valentine-red/20 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-valentine-red/20 rounded-br-2xl"></div>
          
          <div className="relative">
            <h2 className="font-script text-4xl md:text-5xl text-valentine-red text-center mb-8">
              {CONFIG.letter.greeting}
            </h2>
            
            <div className="space-y-6 font-elegant text-gray-700 text-base md:text-lg leading-relaxed">
              <p className="text-center md:text-left italic">
                {CONFIG.letter.paragraph1}
              </p>
              
              <p className="text-center md:text-left italic">
                {CONFIG.letter.paragraph2}
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <Button onClick={onNext}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default LetterPage;
