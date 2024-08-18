import style from "../Map/style.module.css";
import vk from "../../icon/VK.png";
import insta from "../../icon/Instagram.png";

export const Map = () => {
  return (
    <div>
      <section className={style.container_map}>
        <div className={style.info}>
          <ul className={style.map_item}>
            <li className={style.map_list}>
              <h2 className={style.map_h2}>Контакты</h2>
              <span className={style.map_span}>Главный офис</span>
            </li>
            <li className={style.map_list}>
              <h2 className={style.map_tel}>+7 800 789 89 89</h2>
              <p className={style.map_adr}>
                г. Санкт-Петербург, Комсомольская 43 к1
              </p>
              <span className={style.map_span}>отдел продаж</span>
            </li>
            <li className={style.map_list}>
              <h2 className={style.map_tel}>+7 800 789 89 89</h2>
              <p className={style.map_adr}>
                г. Санкт-Петербург, Комсомольская 43 к1
              </p>
              <div className={style.map_set}>
                <a href="">
                  <img src={vk} alt="VK" />
                </a>
                <a href="">
                  <img src={insta} alt="Instagram" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={style.map}></div>
      </section>
    </div>
  );
};
