import "../Header/style.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <nav className="nav">
            <a href="" className="logo">
              <span>SneakMax</span>
            </a>
            <ul className="nav_list">
              <li className="nav_item">Каталог</li>
              <li className="nav_item">О нас</li>
              <li className="nav_item">Подбор товара</li>
              <li className="nav_item">Наша команда</li>
              <li className="nav_item">Доставка и оплата</li>
              <li className="nav_item">Контакты</li>
              <li className="nav_item">Корзина</li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="nav_title">
            Кроссовки известных брендов с доставкой по России и СНГ
          </h1>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <button className="btn_big">Перейти к покупкам</button>
        </div>
      </div>
    </header>
  );
};
