import style from "../Header/style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.menu}>
          <nav className={style.nav}>
            <a href="" className={style.logo}>
              SneakMax
            </a>
            <ul className={style.nav_list}>
              <li className={style.nav_item}>
                <a href="">Каталог</a>
              </li>
              <li className={style.nav_item}>
                <a href="">О нас</a>
              </li>
              <li className={style.nav_item}>
                <a href="">Подбор товара</a>
              </li>
              <li className={style.nav_item}>
                <a href="">Наша команда</a>
              </li>
              <li className={style.nav_item}>
                <a href="">Доставка и оплата</a>
              </li>
              <li className={style.nav_item}>
                <a href="">Контакты</a>
              </li>
              <li className={style.nav_item}>
                <a href="">Корзина</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className={style.nav_title}>
            Кроссовки известных брендов с доставкой по России и СНГ
          </h1>
          <p className={style.nav_title1}>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <button className={style.btn_big}>Перейти к покупкам</button>
        </div>
      </div>
    </header>
  );
};
