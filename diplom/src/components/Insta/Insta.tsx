import style from "../Insta/style.module.css";
import image from "../../images/Rectangle37.jpg";
import image1 from "../../images/Rectangle40.jpg";
import image2 from "../../images/Rectangle38.jpg";
import image3 from "../../images/Rectangle39.jpg";
import image4 from "../../images/Rectangle41.jpg";

export const Insta = () => {
  return (
    <div>
      <section className={style.container_insta}>
        <div className={style.left_tb}>
          <form action="" className={style.insta_tabl}>
            <h2 className={style.insta_que}>Есть вопросы?</h2>
            <p className={style.insta_zag}>
              Заполните форму и наш менеджер свяжется с вами
            </p>
            <input
              className={style.insta_inp}
              type="text"
              name="name"
              placeholder="Имя"
            />
            <input
              className={style.insta_inp}
              type="tel"
              name="phone"
              placeholder="Телефон"
            />
            <button type="submit">Отправшть</button>
          </form>
        </div>
        <div className={style.right_tb}>
          <strong>Instagram</strong>
          <img src={image} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      </section>
    </div>
  );
};
