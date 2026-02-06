import { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import HeartRain from "../components/HeartRain";
import Button from "../components/Button";
import CONFIG from "../config";
import FlowersPage from "../components/FlowerPage";

const ConfirmPage = ({ onNext }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setShowConfirmation(true);
  };

  const handleNo = () => {
    setShowNoMessage(true); // Show the "No" message instead of alert
  };

  const handleBack = () => {
    setShowNoMessage(false); // Go back to previous buttons
  };

  return (
    <PageContainer>
      <HeartRain />

      <div className="relative z-10 max-w-2xl w-full flex justify-center">
        <div
          className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 transition-all duration-700 ${
            showButtons ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-center space-y-8">
            <div className="text-8xl animate-heartbeat">💕</div>

            <h2 className="font-script text-5xl md:text-6xl text-valentine-red">
              {CONFIG.celebration.question}
            </h2>

            <p className="font-elegant text-xl md:text-2xl text-gray-700 italic">
              {CONFIG.celebration.subtitle}
            </p>

            {/* Show Yes/No buttons if "No" message is not active */}
            {!showNoMessage && showButtons && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button onClick={onNext} variant="primary" size="large">
                  Yes, I Accept! 💝
                </Button>

                <Button onClick={handleNo} variant="secondary" size="large">
                  No, sorry...
                </Button>
              </div>
            )}

            {/* Show "No" message with Back button */}
            {showNoMessage && (
              <div className="space-y-4 pt-6">
                <p className="font-elegant text-xl md:text-2xl text-gray-700 italic">
                But I want you soo much💔.....
                </p>
                <Button onClick={handleBack} variant="primary" size="large">
                  Back
                </Button>
              </div>
            )}

          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ConfirmPage;
