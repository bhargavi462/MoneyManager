import './index.css'

const TransactionItem = props => {
  const {item, onDeleteFunction} = props
  const {title, amount, type, id} = item
  const deleteOnClick = () => {
    onDeleteFunction(id)
  }
  return (
    <li className="list-item">
      <p className="list-item-para">{title}</p>
      <p className="list-item-para">{amount}</p>
      <p className="list-item-para">{type}</p>
      <button
        className="custom-btn-delete"
        onClick={deleteOnClick}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img-delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
