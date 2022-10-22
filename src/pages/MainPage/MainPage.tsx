import AdvantageCardsBlock from "../../components/AdvantageCardsBlock/AdvantageCardsBlock";
import Header from "../../components/Header/Header";
import ProductSlide from "../../components/ProductSlide/ProductSlide";
import SubMenu from "../../components/SubMenu/SubMenu";

function MainPage() {
  return (
    <div>
      <Header />
      <SubMenu />
      <main>
        <ProductSlide />
        <AdvantageCardsBlock />
      </main>
    </div>
  );
}

export default MainPage;
