import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Button from "./Button";

const SurpriseForYou = ({onNext}) => {
  const [activeCard, setActiveCard] = useState(null);
  const goBack = () => setActiveCard(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        A Surprise For You
      </h2>

      {/* INITIAL VIEW */}
      {activeCard === null && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              onClick={() => setActiveCard(card)}
              className="cursor-pointer bg-white rounded-2xl shadow-xl p-10 flex items-center justify-center hover:scale-105 transition"
            >
              <FaHeart size={120} color="#e11d48" />
            </div>
          ))}
        </div>
      )}

      {/* CLICKED CARD VIEW */}
      {activeCard !== null && (
        <div className="flex flex-col items-center">
          <div className="bg-[#f8f1e9] rounded-2xl shadow-2xl p-10 max-w-3xl w-full min-h-[560px]">
            {/* CARD 1 — IMAGES */}
            {activeCard === 1 && (
              <>
                <h3 className="text-center text-4xl text-pink-700 mb-3">
                  Favorite Pictures
                </h3>

                <p className="text-center text-lg italic text-gray-600 mb-8">
                  Every photo reminds me why you mean so much to me.
                </p>

                {/* IMAGE CONTAINER */}
                <div className="flex justify-center gap-10 h-[360px] items-center">
                  <img
                    src="/image-3.jpg"
                    className="w-52 h-64 object-cover rounded-xl rotate-[-8deg] shadow-2xl hover:scale-105 transition"
                  />
                  <img
                    src="/image2.jpg"
                    className="w-52 h-64 object-cover rounded-xl rotate-[2deg] shadow-2xl hover:scale-105 transition"
                  />
                  <img
                    src="/imageq.jpg"
                    className="w-52 h-64 object-cover rounded-xl rotate-[8deg] shadow-2xl hover:scale-105 transition"
                  />
                </div>
              </>
            )}

            {/* CARD 2 — YOUTUBE VIDEO */}
            {activeCard === 2 && (
              <>
                <h3 className="text-center text-2xl text-pink-700 mb-3">
                  A Song for You 💕
                </h3>

                <div className="aspect-video relative top-24 re rounded-lg overflow-hidden shadow">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GDND88fqt1o"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            )}

            {/* CARD 3 — SWEET MESSAGE */}
            {activeCard === 3 && (
              <>
                <h3 className="text-center text-2xl text-pink-700 mb-4">
                  Just for You 💖
                </h3>

                <p className="text-center text-gray-700 leading-relaxed">
                  No matter how busy life gets, or how quiet the days feel,
                  you’ll always be my favorite thought. You make ordinary
                  moments feel special just by being you.
                </p>

                <p className="text-center mt-4 font-semibold text-pink-600">
                  Always & forever 🌸
                </p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button onClick={onNext}> Click Here</Button>
              </>
            )}
          </div>

          {/* GO BACK */}
          <button
            onClick={goBack}
            className="mt-6 px-6 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600"
          >
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default SurpriseForYou;
