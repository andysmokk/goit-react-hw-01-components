import s from './TransactionHistory.module.css';

function TransactionHistoryItem({ item }) {
  const { type, amount, currency } = item;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default TransactionHistoryItem;
