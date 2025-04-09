import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';
import { updateTimes, initializeTimes } from '../App';

test('Renders the Reserve a Table heading', () => {
 render(<BookingPage availableTimes={[]} dispatch={() => {}} />);
 const headingElement = screen.getByText("Reserve a Table");
 expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns the correct expected value', () => {
 const expectedValue = [
 '17:00',
 '18:00',
 '19:00',
 '20:00',
 '21:00',
 '22:00',
 ];
 expect(initializeTimes()).toEqual(expectedValue);
});

test('updateTimes returns the same value that is provided in the state', () => {
 const initialState = [
 '17:00',
 '18:00',
 '19:00',
 '20:00',
 '21:00',
 '22:00',
 ];
 const action = { type: 'UPDATE_TIMES' };
 expect(updateTimes(initialState, action)).toEqual([
 '17:00',
 '18:00',
 '19:00',
 '20:00',
 '21:00',
 '22:00',
 ]);
});

test('updates available times when date is changed', () => {
 const { getByLabelText, getByRole } = render(
 <BookingPage availableTimes={initializeTimes()} dispatch={() => {}} />
 );

 const dateInput = getByLabelText('Date:');
 fireEvent.change(dateInput, { target: { value: '2024-01-01' } });

 const timeSelect = getByRole('combobox', { name: 'Time:' });
 expect(timeSelect).toBeInTheDocument();
});
