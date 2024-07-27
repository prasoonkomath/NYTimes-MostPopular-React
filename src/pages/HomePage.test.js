import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { act } from 'react';

// Mock the PopularNews component
jest.mock('../components/PopularNews', () => () => <div>Popular News</div>);

describe('HomePage', () => {
  test('renders PopularNews component', async () => {
    await act(async () => { render(<HomePage />); });
    expect(screen.getByText('Popular News')).toBeInTheDocument();
  });
});
