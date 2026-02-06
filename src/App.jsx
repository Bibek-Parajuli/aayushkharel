import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import EnvelopePage from "./pages/EnvelopePage";
import LetterPage from "./pages/LetterPage";
import ConfirmPage from "./pages/ConfirmPage";
import CelebrationPage from "./pages/CelebrationPage";
import FlowersPage from "./components/FlowerPage";
import FavoritePicture from "./components/FavoritePicture";
import SurpriseForYou from "./components/Suprise";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNext={() => setCurrentPage("envelope")} />;
      case "envelope":
        return <EnvelopePage onNext={() => setCurrentPage("letter")} />;
      case "letter":
        return <LetterPage onNext={() => setCurrentPage("confirm")} />;
           case "confirm":
        return <ConfirmPage onNext={() => setCurrentPage("flower")} />;
      case "flower":
        return <SurpriseForYou onNext={()=>setCurrentPage('celebration')}/>
          //  case "favorite":
          // return <FavoritePicture onNext={()=>setCurrentPage('celebration')}/>
          case "celebration":
        return <CelebrationPage onRestart={()=>setCurrentPage('landing')}/>
      default:
        return <LandingPage onNext={() => setCurrentPage("envelope")} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {renderPage()}
     {/* <SurpriseForYou/> */}
     {/* <CelebrationPage/> */}
    </div>
  );
}

export default App;
