import style from "../Team/style.module.css";
import image from "../../images/Mask Group.jpg";
import image1 from "../../images/Mask Group1.jpg";
import image2 from "../../images/Mask Group2.jpg";
import image3 from "../../images/Mask Group3.jpg";
import image4 from "../../images/Mask Group4.jpg";
import image5 from "../../images/Mask Group5.jpg";

export const Team = () => {
  return (
    <div>
      <section className={style.container_team}>
        <h2 className={style.team_h2}>Наша команда</h2>
        <ul className={style.team_item}>
          <li className={style.team_list}>
            <img src={image} alt="" />
            <h3 className={style.team_name}>Максим Залатарёв</h3>
            <span className={style.team_sp}>Администратор</span>
          </li>
          <li className={style.team_list}>
            <img src={image1} alt="" />
            <h3 className={style.team_name}>Максим Залатарёв</h3>
            <span className={style.team_sp}>Администратор</span>
          </li>
          <li className={style.team_list}>
            <img src={image2} alt="" />
            <h3 className={style.team_name}>Максим Залатарёв</h3>
            <span className={style.team_sp}>Администратор</span>
          </li>
          <li className={style.team_list}>
            <img src={image3} alt="" />
            <h3 className={style.team_name}>Максим Залатарёв</h3>
            <span className={style.team_sp}>Администратор</span>
          </li>
          <li className={style.team_list}>
            <img src={image4} alt="" />
            <h3 className={style.team_name}>Максим Залатарёв</h3>
            <span className={style.team_sp}>Администратор</span>
          </li>
          <li className={style.team_list}>
            <img src={image5} alt="" />
            <h3 className={style.team_name}>Максим Залатарёв</h3>
            <span className={style.team_sp}>Администратор</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
