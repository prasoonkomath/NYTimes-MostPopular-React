import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the HomePage and DetailPage components
jest.mock('./pages/HomePage', () => () => <div>Most Popular</div>);
jest.mock('./pages/DetailPage', () => () => <div>Detail Page</div>);

describe('App', () => {
  test('renders HomePage at root path', () => {
    render(<App />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });
});
