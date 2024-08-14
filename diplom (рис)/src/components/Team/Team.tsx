import "../Team/style.module.css";

export const Team = () => {
  return (
    <div>
      <section className="container_team">
        <h2>Наша команда</h2>
        <ul className="team_item">
          <li className="team_list">
            <div>
              <img src="./src/images/Mask Group (1).jpg" alt="" />
              <strong>Максим Залатарёв</strong>
              <span>Администратор</span>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};
