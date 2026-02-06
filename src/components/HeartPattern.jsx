const HeartPattern = ({ opacity = 0.1 }) => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      {/* Large decorative hearts in background */}
      <div className="absolute top-10 left-10 text-9xl text-valentine-pink animate-float">
        ❤️
      </div>
      <div className="absolute top-20 right-20 text-7xl text-valentine-red animate-float" style={{ animationDelay: '1s' }}>
        💕
      </div>
      <div className="absolute bottom-20 left-32 text-8xl text-valentine-pink animate-float" style={{ animationDelay: '2s' }}>
        💖
      </div>
      <div className="absolute bottom-32 right-16 text-6xl text-valentine-red animate-float" style={{ animationDelay: '0.5s' }}>
        💗
      </div>
      <div className="absolute top-1/2 left-20 text-5xl text-valentine-pink animate-float" style={{ animationDelay: '1.5s' }}>
        💝
      </div>
      <div className="absolute top-1/3 right-32 text-7xl text-valentine-red animate-float" style={{ animationDelay: '2.5s' }}>
        ❤️
      </div>
    </div>
  );
};

export default HeartPattern;
