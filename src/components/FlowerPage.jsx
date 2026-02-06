import PageContainer from './PageContainer';
import HeartPattern from './HeartPattern';
import Button from './Button';

const FlowersPage = ({ onNext }) => {
  return (
    <PageContainer>
      <HeartPattern />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        
        {/* 🌸 Flowers */}
        <div className="flex gap-6 mb-8 text-6xl animate-fadeIn">
          <span className="animate-bounce delay-0">🌸</span>
          <span className="animate-bounce delay-150">🌷</span>
          <span className="animate-bounce delay-300">🌹</span>
          <span className="animate-bounce delay-500">💐</span>
        </div>

        {/* 💌 Text */}
        <h2 className="font-script text-4xl text-valentine-red mb-4">
          These are for you
        </h2>

        <p className="max-w-md text-gray-600 italic leading-relaxed mb-8">
          Flowers fade with time, but the way you make me feel never does.
          Every petal carries a little piece of my love, just like every moment
          with you carries a piece of my heart.
        </p>

        {/* 🌹 Extra Touch */}
        <p className="text-sm text-gray-500 italic mb-10">
          Just a small reminder of how special you are to me.
        </p>

        {/* ❤️ Continue Button (optional) */}
         <Button onClick={onNext} >Continue..</Button>
      </div>
    </PageContainer>
  );
};

export default FlowersPage;
