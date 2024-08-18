import style from "../Footer/style.module.css";

export const Footer = () => {
  return (
    <footer>
      <section className={style.container}>
        <a className={style.logo} href="">
          SneakMax
        </a>
        <ul className={style.footer_item}>
          <li className={style.footer_list}>
            <a href="">Каталог</a>
          </li>
          <li className={style.footer_list}>
            <a href="">О нас</a>
          </li>
          <li className={style.footer_list}>
            <a href="">Подбор товара</a>
          </li>
          <li className={style.footer_list}>
            <a href="">Наша команда</a>
          </li>
          <li className={style.footer_list}>
            <a href="">Доставка и оплата</a>
          </li>
          <li className={style.footer_list}>
            <a href="">Контакты</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
