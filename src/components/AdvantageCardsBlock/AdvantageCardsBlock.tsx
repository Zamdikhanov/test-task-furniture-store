import css from "./AdvantageCardsBlock.module.scss";
import { ReactComponent as DeliverySVG } from "../../assets/icons/delivery-icon.svg";
import { ReactComponent as FluentDesignSVG } from "../../assets/icons/fluent-design-icon.svg";
import { ReactComponent as MachineLearningModelSVG } from "../../assets/icons/machine-learning-model-icon.svg";
import { ReactComponent as ProtectSVG } from "../../assets/icons/protect-icon.svg";

const advantages = [
  {
    description: "Уникальный дизайн",
    renderSvg: () => <FluentDesignSVG className={css.advantageCard__svg} />,
  },
  {
    description: "Бесплатная доставка",
    renderSvg: () => <DeliverySVG className={css.advantageCard__svg} />,
  },
  {
    description: "Гарантия 10 лет",
    renderSvg: () => <ProtectSVG className={css.advantageCard__svg} />,
  },
  {
    description: "Современные технологии",
    renderSvg: () => (
      <MachineLearningModelSVG className={css.advantageCard__svg} />
    ),
  },
];

function AdvantageCardsBlock() {
  return (
    <div className={css.advantageCards}>
      <ul className={css.advantageCards__container}>
        {advantages.map((itemObj) => {
          return (
            <li className={css.advantageCard} key={itemObj.description}>
              {itemObj.renderSvg()}
              <div className={css.advantageCard__description}>
                {itemObj.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AdvantageCardsBlock;
