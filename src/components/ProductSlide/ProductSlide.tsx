import Button from "../Button/Button";
import css from "./ProductSlide.module.scss";

function ProductSlide({ imgUrl = "" }) {
  return (
    <div className={css.productSlide}>
      <h2 className={css.productSlide__title}>
        Интернет магазин мебельной компании
      </h2>
      <div className={css.productSlide__subtitle}>Вот так</div>
      <div className={css.productSlide__text}>
        Очередное тестовое задание в процессе разработки. Должно стать
        последним. Очередное тестовое задание в процессе разработки. Должно
        стать последним.Очередное тестовое задание в процессе разработки. Должно
        стать последним.
      </div>
      <div className={css.productSlide__imageBlock}>
        <img src={imgUrl} alt="sofa" />
      </div>
      <div className={css.productSlide__pagination}></div>
      <div className={css.productSlide__callingText}>
        Рассчитайте стоимость мебели уже сейчас и вы получитье скидку <b>10</b>
        %.
      </div>
      <div className={css.productSlide__buttonContainer}>
        <Button buttonType="button">Рассчитать стоимость</Button>
      </div>
    </div>
  );
}

export default ProductSlide;
