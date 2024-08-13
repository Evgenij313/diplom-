import "../Catalog/style.module.css";

export const Catalog = () => {
  return;
  <div>
    <section className="container_catalog">
      <h2>Каталог</h2>
      <div className="filters">
        <div className="price_filter"></div>
        <div className="gender_filter">
          <span>Пол</span>
          <input type="checkbox" name="check" />
          мужской
          <input type="checkbox" name="check" />
          женский
        </div>
        <div className="size_filter">
          <span>Размер</span>
        </div>
        <button className="btn_black">Применить</button>
        <span>сбросить</span>
      </div>
      <div className="products">
        <div className="product_list">
          <ul>
            <li className="product_item">
              <img src="./images/image.jpg" alt="" />
              <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
              <p className="price">11000 p.</p>
            </li>
            <li className="product_item">
              <img src="./images/image.jpg" alt="" />
              <span>Кроссовки Nike Air Force 1 '07 QS</span>
              <p className="price">11000 p.</p>
            </li>
            <li className="product_item"></li>
            <li className="product_item"></li>
            <li className="product_item"></li>
            <li className="product_item"></li>
            <li className="product_item"></li>
            <li className="product_item"></li>
            <li className="product_item"></li>
          </ul>
        </div>
        <button className="btn_red">Показать ещё</button>
      </div>
    </section>
  </div>;
};
