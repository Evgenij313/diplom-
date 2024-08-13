import style from "../Count/style.module.css";

export const Count = () => {
  return (
    <div className={style.count}>
      <li className="product_item">
        <img src="./components/images/image.jpg" alt="" />
        <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
        <p className="price">11000 p.</p>
      </li>
    </div>
  );
};
