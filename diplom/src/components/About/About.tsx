import style from "../About/style.module.css";
import images from "../../images/pexels.jpg";

export const About = () => {
  return (
    <div>
      <section className={style.container_about}>
        <div className={style.abo}>
          <h2>Пара слов о нас</h2>
          <p className={style.abo1}>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
          </p>
        </div>
        <img src={images} className={style.foto_abo} alt="foto" />
      </section>
    </div>
  );
};
