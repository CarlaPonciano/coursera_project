import React, { useState } from 'react';
import styled from 'styled-components';

const BookingPageContainer = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const BookingForm = styled.form`
 display: flex;
 flex-direction: column;
 width: 50%;
 min-width: 300px;

 label {
 margin-top: 10px;
 }

 input,
 select,
 textarea {
 padding: 8px;
 margin-top: 5px;
 margin-bottom: 10px;
 border: 1px solid #ccc;
 border-radius: 4px;
 }

 button {
 background-color: #495E57;
 color: white;
 padding: 10px;
 border: none;
 border-radius: 4px;
 cursor: pointer;

 &:hover {
 background-color: #333333;
 }
 }
`;

function BookingPage({ availableTimes, dispatch }) {
 const [formData, setFormData] = useState({
 date: '',
 time: '',
 guests: 1,
 occasion: 'None',
 });

 const handleChange = (e) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value,
 });

 if (e.target.name === 'date') {
 dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
 }
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 console.log('Form Data Submitted:', formData);
 alert('Reservation submitted!');
 };

 return (
 <BookingPageContainer>
 <h2>Reserve a Table</h2>
 <BookingForm onSubmit={handleSubmit}>
 <label htmlFor="date">Date:</label>
 <input
 type="date"
 id="date"
 name="date"
 value={formData.date}
 onChange={handleChange}
 required
 />

 <label htmlFor="time">Time:</label>
 <select id="time" name="time" value={formData.time} onChange={handleChange} required>
 {availableTimes.map((time) => (
 <option key={time}>{time}</option>
 ))}
 </select>

 <label htmlFor="guests">Number of Guests:</label>
 <input
 type="number"
 id="guests"
 name="guests"
 min="1"
 max="10"
 value={formData.guests}
 onChange={handleChange}
 required
 />

 <label htmlFor="occasion">Occasion:</label>
 <select
 id="occasion"
 name="occasion"
 value={formData.occasion}
 onChange={handleChange}
 >
 <option>None</option>
 <option>Birthday</option>
 <option>Anniversary</option>
 </select>

 <button type="submit">Make Reservation</button>
 </BookingForm>
 </BookingPageContainer>
 );
}

export default BookingPage;
