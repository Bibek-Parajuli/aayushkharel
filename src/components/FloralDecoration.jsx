const FloralDecoration = () => {
  return (
    <>
      {/* Top Floral Decoration */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2">
        <span className="text-3xl">🌹</span>
        <span className="text-2xl">🌸</span>
        <span className="text-3xl">💐</span>
        <span className="text-2xl">🌺</span>
        <span className="text-3xl">🌹</span> 
      </div>
      
      {/* Corner Flowers */}
      <div className="absolute -top-4 -left-4 text-4xl opacity-70">🌹</div>
      <div className="absolute -top-4 -right-4 text-4xl opacity-70">🌹</div>
      
      {/* Side Decorations */}
      <div className="absolute top-1/4 -left-6 flex flex-col space-y-2">
        <span className="text-2xl">🌸</span>
        <span className="text-xl">🍃</span>
      </div>
      
      <div className="absolute top-1/4 -right-6 flex flex-col space-y-2">
        <span className="text-2xl">🌺</span>
        <span className="text-xl">🍃</span>
      </div>
    </>
  );
};

export default FloralDecoration;
