import React from 'react';
import { render } from '@testing-library/react';
import SleepForm from './SleepForm';

test('renders expected form elements', () => {
  const { getByText } = render(<SleepForm />);
  const buttonElement = getByText(/calculate/i);
  const durationBedDropdown = getByText(/Duration in Bed/i);
  const durationSleepDropdown = getByText(/Duration Sleeping/i);
  // expected elements are there in the DOM
  expect(buttonElement).toBeInTheDocument();
  expect(durationBedDropdown).toBeInTheDocument();
  expect(durationSleepDropdown).toBeInTheDocument();
});

test('form button is disabled on intial render', () => {
  const { getByText, getAllByText } = render(<SleepForm />);
  const buttonElement = getByText(/calculate/i).closest('button')
  const dropdowns = getAllByText(/-- select --/i);
  // button should be disabled on initial render
  expect(buttonElement).toHaveAttribute('disabled');
  expect(buttonElement.disabled).toBe(true)
})
