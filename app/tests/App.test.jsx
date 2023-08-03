import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/app'; // Adjust the import path to your App component

test('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('HRCom')).toBeInTheDocument();
  });