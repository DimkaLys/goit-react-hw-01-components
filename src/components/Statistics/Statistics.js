import PropTypes from "prop-types";
import "./Statistics.css";

const color = function createColor() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};

function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="list">
        {stats.map((stat) => (
          <li
            className="list__item"
            style={{ backgroundColor: `${color()}` }}
            key={stat.id}
          >
            <span className="list__label">{stat.label}</span>
            <span className="list__percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
