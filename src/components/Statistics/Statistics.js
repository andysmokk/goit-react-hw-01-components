import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const backgroundColor = function createRandomCoror() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};

function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(stat => (
          <li
            className={s.list__item}
            style={{ backgroundColor: `${backgroundColor()}` }}
            key={stat.id}
          >
            <span className={s.list__label}>{stat.label}</span>
            <span className={s.list__percentage}>{stat.percentage}%</span>
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
    }),
  ),
};

export default Statistics;
