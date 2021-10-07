import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import "./Transaction.css";

function TransactionHistory({ items }) {
  return (
    <section className="TransactionHistory">
      <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <TransactionItem
              item={item}
              key={item.id}
              idItem={item.id}
              typeItem={item.type}
              amountItem={item.amount}
              currencyItem={item.currency}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionItem.propTypes = {
  idItem: PropTypes.string.isRequired,
  typeItem: PropTypes.string.isRequired,
  amountItem: PropTypes.string.isRequired,
  currencyItem: PropTypes.string.isRequired,
};

export default TransactionHistory;
