import style from "../Questions/style.module.css";

export const Questions = () => {
  return (
    <div>
      <section className={style.container_questions}>
        <h2>Часто задаваемые вопросы</h2>
        <div id="accordion">
          <h3>Вопрос 1</h3>
          <div>
            <p>
              А это ответ 1: в комплексе функционируют 6 детских садов с
              площадками, воспитателями и всякими другими людьми
            </p>
          </div>
          <h3>Вопрос 2</h3>
          <div>
            <p>
              Sed non urna. Phasellus eu ligula. Vestibulum sit amet purus.
              Vivamus hendrerit, dolor aliquet laoreet, mauris turpis velit,
              faucibus interdum tellus libero ac justo.
            </p>
          </div>
        </div>
        <script>$("#accordion").accordion();</script>
      </section>
    </div>
  );
};
