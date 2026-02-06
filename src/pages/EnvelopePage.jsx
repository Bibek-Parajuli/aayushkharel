import { useState, useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import HeartPattern from '../components/HeartPattern';
import FloralDecoration from '../components/FloralDecoration';
import CONFIG from '../config';

const EnvelopePage = ({ onNext }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpening(true);

      const cardTimer = setTimeout(() => {
        setShowCard(true);

        const continueTimer = setTimeout(() => {
          setShowContinue(true);
        }, 800);

        return () => clearTimeout(continueTimer);
      }, CONFIG.timings.envelopeOpenDuration);

      return () => clearTimeout(cardTimer);
    }, CONFIG.timings.envelopeOpenDelay);

    return () => clearTimeout(openTimer);
  }, []);

  return (
    <PageContainer>
      <HeartPattern />

      {/* 🔴 LOADING OVERLAY */}
      
      <div className="relative z-10 flex flex-col items-center justify-center perspective-1000">
        <div className="relative w-80 h-96 md:w-96 md:h-[28rem]">

          {/* Envelope Container */}
          <div
            className={`absolute inset-0 preserve-3d transition-transform duration-1000 ${
              isOpening ? 'scale-110' : 'scale-100'
            }`}
          >
            {/* Envelope Flap */}
            <div
              className={`absolute top-0 left-0 right-0 h-48
                bg-gradient-to-b from-valentine-red to-valentine-darkred
                origin-bottom preserve-3d transition-transform duration-1000
                ${isOpening ? '-rotate-x-180' : 'rotate-x-0'}`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <path d="M 0 0 L 200 200 L 400 0 Z" fill="#8B0000" />
              </svg>
            </div>

            {/* Envelope Body */}
            <div className="absolute inset-0 bg-valentine-red rounded-lg shadow-2xl overflow-hidden">
              <div className=" absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/10 to-transparent text-center" />
       <span className='relative left-7 top-11'>Please Wait ...</span>
              {/* Card */}
              <div
                className={`absolute inset-x-4 bottom-4 top-16 transition-all duration-1000 ${
                  showCard
                    ? 'translate-y-[-120px] opacity-100'
                    : 'translate-y-0 opacity-0'
                }`}
              >
                <div className="relative w-full h-full bg-valentine-cream rounded-lg shadow-xl p-6 border-4 border-valentine-pink">
                  <FloralDecoration />

                  <div className="relative z-10 text-center">
                    <p className="font-elegant text-sm text-gray-600 italic mb-2">
                      To the love of my life
                    </p>

                    <h2 className="font-script text-4xl text-valentine-red mb-4">
                      {CONFIG.recipientName}
                    </h2>

                    {/* Heart Photo */}
                    <div className="flex flex-col items-center mb-6">
  {/* ❤️ Perfect Heart with Image */}
  <svg
    viewBox="0 0 32 29.6"
    className="w-48 h-48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="heartClip">
        <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0
          C3.8,0,0,3.8,0,8.4c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2
          C32,3.8,28.2,0,23.6,0z" />
      </clipPath>
    </defs>

    {/* Background heart */}
    <path
      d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0
        C3.8,0,0,3.8,0,8.4c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2
        C32,3.8,28.2,0,23.6,0z"
      fill="#c9184a"
    />

    {/* Image inside heart */}
    <image
      href={CONFIG.photoUrl}
      width="32"
      height="29.6"
      clipPath="url(#heartClip)"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>

  {/* 💌 Description */}
  <p className="mt-4 max-w-xs text-center text-sm italic text-gray-600">
    To the love of my life
  </p>
</div>

                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>

        {/* ❤️ CONTINUE BUTTON */}
        {showContinue && (
          <button
            onClick={onNext}
            className="mt-16 px-8 py-3 rounded-full
                       bg-valentine-red text-white
                       font-elegant shadow-lg
                       transition transform hover:scale-105
                       animate-fadeIn"
          >
            Continue ❤️
          </button>
        )}
      </div>
    </PageContainer>
  );
};

export default EnvelopePage;
