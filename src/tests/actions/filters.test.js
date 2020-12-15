import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// a value is put in because we are NOT testing for default (thats below)
test('should generate set text filter object with text value', () => {
  const text = 'Some Value'
  const action = setTextFilter(text);
  expect(action).toEqual({
  type: 'SET_TEXT_FILTER',
  text: text
  });
});

test('should generate set text action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});


// one ach sort time and 2 for set item
