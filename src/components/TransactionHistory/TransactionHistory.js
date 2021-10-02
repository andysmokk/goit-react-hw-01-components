import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table className="transaction-history">
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
  );
}

TransactionHistoryItem.propTypes = {
  typeItem: PropTypes.string.isRequired,
  amountItem: PropTypes.string.isRequired,
  currencyItem: PropTypes.string.isRequired,
  idItem: PropTypes.string.isRequired,
};

export default TransactionHistory;
