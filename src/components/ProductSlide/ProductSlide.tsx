import Button from "../Button/Button";
import css from "./ProductSlide.module.scss";

function ProductSlide({ imgUrl = "", callback = () => {} }) {
  const handleClick = () => {
    callback();
  };
  return (
    <>
      <div className={css.productSlide}>
        <h2 className={css.productSlide__title}>
          Интернет магазин мебельной компании
        </h2>
        <div className={css.productSlide__subtitle}>SWEETHOME</div>
        <div className={css.productSlide__text}>
          Добро пожаловать на официальный сайт «SWEETHOME»! В каталоге компании
          представлен широкий выбор корпусной мебели от производителя — спальни,
          гостиные, прихожие, мебель для ванных комнат, кухонь, а также мягкая
          мебель и матрасы.
        </div>
        <div className={css.productSlide__imageBlock}>
          <img src={imgUrl} alt="sofa" />
        </div>
        <div className={css.productSlide__pagination}></div>
        <div className={css.productSlide__callingText}>
          Рассчитайте стоимость мебели уже сейчас и вы получитье скидку{" "}
          <b>10</b>
          %.
        </div>
        <div className={css.productSlide__buttonContainer}>
          <Button buttonType="button" onClick={handleClick}>
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductSlide;
