import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  console.log(items);
  return (
    <section className={s.TransactionHistory}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <TransactionHistoryItem
              item={item}
              key={item.id}
              typeItem={item.type}
              amountItem={item.amount}
              currencyItem={item.currency}
              idItem={item.id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistoryItem.propTypes = {
  typeItem: PropTypes.string.isRequired,
  amountItem: PropTypes.string.isRequired,
  currencyItem: PropTypes.string.isRequired,
  idItem: PropTypes.string.isRequired,
};

export default TransactionHistory;
