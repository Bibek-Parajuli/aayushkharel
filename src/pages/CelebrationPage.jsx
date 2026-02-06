// pages/CelebrationPage.jsx
import React from "react";
import PageContainer from "../components/PageContainer";
import Button from "../components/Button";
///this page is called love mail
const CelebrationPage = ({ onRestart }) => {
  return (
    <PageContainer>
      <div className="text-center space-y-6">
        <h1 className="text-6xl text-pink-600 animate-pulse">🎉 🎉</h1>
        <p className="text-xl text-gray-700">Thank You for making my day <br />
        ilysm  💖</p>
        
      </div>
      <br /><br /><br />
      <div className="relative top-48 ">
      <Button onClick={onRestart}>Start Over</Button>

      </div>
    </PageContainer>
  );
};

export default CelebrationPage;
