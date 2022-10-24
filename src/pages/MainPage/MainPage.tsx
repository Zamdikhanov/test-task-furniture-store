import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdvantageCardsBlock from "../../components/AdvantageCardsBlock/AdvantageCardsBlock";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import SubMenu from "../../components/SubMenu/SubMenu";

function MainPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/sofa");
  }, []);

  return (
    <div>
      <Header />
      <SubMenu />
      <main>
        <Slider />
        <AdvantageCardsBlock />
      </main>
    </div>
  );
}

export default MainPage;
