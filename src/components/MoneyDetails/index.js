import './index.css'

const MoneyDetails = ({balance, expenses, income}) => {
  return (
    <div className="details-container">
      <div className="balance-main-container container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="moneyDetails-image"
        />
        <div className="balance-containner">
          <p className="balance-text">Your Balance</p>
          <p className="balance-text" data-testid="balanceAmount">
            RS {balance}
          </p>
        </div>
      </div>
      <div className="container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="moneyDetails-image"
        />
        <div className="balance-containner">
          <p className="balance-text">Your Income</p>
          <p className="balance-text" data-testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </div>
      <div className="container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="moneyDetails-image"
        />
        <div className="balance-containner">
          <p className="balance-text">Your Expenses</p>
          <p className="balance-text" data-testid="expensesAmount">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
