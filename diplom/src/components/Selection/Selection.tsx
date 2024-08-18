import style from "../Selection/style.module.css";
import images from "../../images/фото кроссовка.jpg";
import images1 from "../../images/фото кроссовка.jpg";
import images2 from "../../images/фото кроссовка.jpg";
import images3 from "../../images/фото кроссовка.jpg";
import images4 from "../../images/фото кроссовка.jpg";
import images5 from "../../images/фото кроссовка.jpg";

export const Selection = () => {
  return (
    <div>
      <section className={style.container_selection}>
        <h2 className={style.sel_h2}>Мы подберем идеальную пару для вас</h2>
        <span className={style.sel_p}>
          Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
          вас моделями
        </span>
        <h3 className={style.sel_h3}>Какой тип кроссовок рассматриваете?</h3>
        <div className={style.sel_prod}>
          <ul className={style.sel_item}>
            <li className={style.sel_list}>
              <img src={images} alt="" />
              <input type="checkbox" name="check" />
              кеды
            </li>
            <li className={style.sel_list}>
              <img src={images1} alt="" />
              <input type="checkbox" name="check" />
              кеды
            </li>
            <li className={style.sel_list}>
              <img src={images2} alt="" />
              <input type="checkbox" name="check" />
              кеды
            </li>
            <li className={style.sel_list}>
              <img src={images3} alt="" />
              <input type="checkbox" name="check" />
              кеды
            </li>
            <li className={style.sel_list}>
              <img src={images4} alt="" />
              <input type="checkbox" name="check" />
              кеды
            </li>
            <li className={style.sel_list}>
              <img src={images5} alt="" />
              <input type="checkbox" name="check" />
              кеды
            </li>
          </ul>
        </div>
        <button className={style.sel_btn}>Следующий шаг</button>
      </section>
    </div>
  );
};
