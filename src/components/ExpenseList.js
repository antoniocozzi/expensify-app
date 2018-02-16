import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>        
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>            
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses to show</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} /*la chiave va data 
                                                                ogni volta che abbiamo 
                                                                una collection di items*/ 
                                                    {...expense} />
                    })
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)/*
                    cosa vogliamo prendere dallo store di redux
                    */(ExpenseList)/*
                    il componente di cui vogliamo creare la versione
                     connessa a ciò che prendiamo dallo store*/