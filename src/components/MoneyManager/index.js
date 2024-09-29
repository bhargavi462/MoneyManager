import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// const transactionList = [
//   {
//     id: uuidv4(),
//     title: 'Salary',
//     amount: 50000,
//     type: 'Income',
//   },
// ]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactionList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: Number(event.target.value)})
  }

  onChangeOption = event => {
    this.setState({type: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(
      prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
        type: 'Income',
      }),
      this.updateCalculations,
    )
  }

  onDeleteFunction = id => {
    const {transactionList} = this.state
    const filteredArray = transactionList.filter(
      transaction => transaction.id !== id,
    )
    this.setState({transactionList: filteredArray}, this.updateCalculations)
  }

  updateCalculations = () => {
    const {transactionList} = this.state
    let totalIncome = 0
    let totalExpenses = 0

    transactionList.forEach(transaction => {
      if (transaction.type.toLowerCase() === 'income') {
        totalIncome += transaction.amount
      } else if (transaction.type.toLowerCase() === 'expenses') {
        totalExpenses += transaction.amount
      }
    })

    const balance = totalIncome - totalExpenses

    this.setState({
      income: totalIncome,
      expenses: totalExpenses,
      balance,
    })
  }

  render() {
    const {title, amount, type, transactionList, expenses, income, balance} =
      this.state

    return (
      <div className="bg-container">
        <div className="sub-bg-container">
          <div className="sub-container">
            <h1 className="name-head">Hi, Richard</h1>
            <p>
              Welcome back to your{' '}
              <span className="para-text">Money Manager</span>
            </p>
          </div>
          <div>
            <MoneyDetails
              income={income}
              expenses={expenses}
              balance={balance}
            />
          </div>
          <div className="lower-container">
            <form className="form-container" onSubmit={this.handleSubmit}>
              <h1 className="form-heading">Add Transaction</h1>
              <div className="input-container">
                <label htmlFor="title" className="label-text">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input-text"
                  placeholder="TITLE"
                  value={title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="amount" className="label-text">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input-text"
                  placeholder="AMOUNT"
                  value={amount}
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="type" className="label-text">
                  TYPE
                </label>
                <select
                  id="type"
                  name="options"
                  className="input-text"
                  onChange={this.onChangeOption}
                  value={type}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
              </div>
              <button type="submit" className="custom-btn">
                Add
              </button>
            </form>
            <div className="list-container">
              <h1>History</h1>
              <div className="list-item-container">
                <div className="item-container">
                  <p className="list-para">Title</p>
                  <p className="list-para">Amount</p>
                  <p className="list-para">Type</p>
                </div>
                <ul>
                  {transactionList.map(transaction => (
                    <TransactionItem
                      item={transaction}
                      key={transaction.id}
                      onDeleteFunction={this.onDeleteFunction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
