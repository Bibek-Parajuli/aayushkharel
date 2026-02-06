import { useEffect, useState } from 'react';

const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    const newHearts = [];

    for (let i = 0; i < 30; i++) {
      newHearts.push({
        id: i,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 1 + Math.random() * 2,
      });
    }

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            top: '-10%',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animationIterationCount: 'infinite',
            fontSize: `${heart.size}rem`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default HeartRain;
