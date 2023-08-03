import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App'; // Adjust the import path to your App component

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  // Add assertions based on your component's content
});