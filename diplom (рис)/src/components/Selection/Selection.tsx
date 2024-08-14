import "../Selection/style.module.css";

export const Selection = () => {
  return (
    <div>
      <section className="container_selection">
        <h2>Мы подберем идеальную пару для вас</h2>
        <p>
          Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
          вас моделями
        </p>
        <strong>Какой тип кроссовок рассматриваете?</strong>
        <div>
          <img src="" alt="" />
          <input type="checkbox" name="check" />
          кеды
        </div>
        <button>Следующий шанс</button>
      </section>
    </div>
  );
};
