import style from "../Count/style.module.css";
import image from "../../images/image.jpg";

export const Count = () => {
  return (
    <div className={style.count}>
      <li className={style.product_item}>
        <div>
          <img src={image} alt="" />
        </div>
        <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
        <p className={style.price}>11000 p.</p>
      </li>
    </div>
  );
};
