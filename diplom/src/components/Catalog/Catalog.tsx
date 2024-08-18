import style from "../Catalog/style.module.css";
import image from "../../images/image.jpg";

export const Catalog = () => {
  return (
    <div>
      <section className={style.container_catalog}>
        <h2>Каталог</h2>
        <div className={style.catalog}>
          <div className={style.filters}>
            <div className={style.price_filter}>
              <h3>Подбор по параметрам</h3>
              <p>Цена, руб</p>
              <div>ползунок</div>
            </div>
            <div className={style.gender_filter}>
              <strong>Пол</strong>
              <input type="checkbox" name="check" />
              мужской
              <input type="checkbox" name="check" />
              женский
            </div>
            <div className={style.size_filter}>
              <strong>Размер</strong>
              <table border={1}>
                <tr>
                  <td>35</td>
                  <td>36</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>39</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>42</td>
                  <td>43</td>
                </tr>
              </table>
            </div>
            <button type="submit" className={style.btn_black}>
              Применить
            </button>
            <a href="">сбросить</a>
          </div>
          <div className={style.products}>
            <div className={style.product_list}>
              <ul className={style.product_li1}>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
                <li className={style.product_item}>
                  <img src={image} alt="" />
                  <h3>Кроссовки Nike Air Force 1 '07 QS</h3>
                  <p className={style.price}>11000 p.</p>
                </li>
              </ul>
            </div>
            <button className={style.btn_red}>Показать ещё</button>
          </div>
        </div>
      </section>
    </div>
  );
};
