import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense, startAddExpense } from "../actions/expenses";
import { Expense } from "../types/Expense";
import { AppState } from "../store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";

interface HomePageProps {
  id? : string;
  color?: string;
}

interface HomePageState {

}

type Props = HomePageProps & LinkDispatchProps & LinkStateProp

export class HomePage extends React.Component<Props, HomePageState> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string)=> {
    this.props.startRemoveExpense(id);
  };
  onAdd = (description: string, note: string, amount: number, createdAt: number) => {
    this.props.startAddExpense({description, note, amount, createdAt});
  }
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <button onClick={()=> this.onAdd("description", "note", 1, 1)}>Add expense</button>
        <div>
          {expenses.map(expense => (
            <div>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface LinkStateProp {
  expenses: Expense[]
}

interface LinkDispatchProps{
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
  startAddExpense: (expenseData: {description: string, note: string, amount: number, createdAt: number}) => void;
}

const mapStateToProps = (state: AppState, ownProps: HomePageProps) : LinkStateProp => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: HomePageProps) : LinkDispatchProps => ({
  // startEditExpense: expense => dispatch(startEditExpense(expense)),
  // startRemoveExpense: data => dispatch(startRemoveExpense(data))
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch),
  startAddExpense: bindActionCreators(startAddExpense, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
