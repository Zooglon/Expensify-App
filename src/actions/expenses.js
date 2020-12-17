import uuid from 'uuid';
import database from '../firebase/firebase';

// steps for the expenses actions -
// component calls action generator
// action generator returns function
// component dispatches function
// function runs and can dispatch other actions to manipulate the redux store

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// this is going to dispatch ADD_EXPENSE inside of a function
export const startAddExpense = (expenseData = {}) => {
  // this gets our data defaults
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    // connects and saves to the database
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
