import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/app'; // Adjust the import path to your App component

test('renders without crashing', () => {
  // Create a div with the id 'root'
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  // Now the 'root' element should exist, and you can render the App component
  const { getByText } = render(<App />, { container: root });
    expect(getByText('HRCom')).toBeInTheDocument();
  });