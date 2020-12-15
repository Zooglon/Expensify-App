import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should edit an expense action object', () => {
  const edit = editExpense('123abc', {note: 'New note taken'});
  expect(edit).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'New note taken'}
  });
});

test('should set up addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with defualt values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
    id: expect.any(String),
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  });
});
