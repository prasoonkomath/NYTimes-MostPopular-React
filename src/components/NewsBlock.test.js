import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsBlock from './NewsBlock';

describe('NewsBlock', () => {
  const props = {
    title: 'Test Title',
    abstract: 'Test Abstract',
    imageUrl: 'https://example.com/image.jpg',
    date: '2024-07-25'
  };

  test('renders NewsBlock component with given props', () => {
    render(<NewsBlock {...props} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Abstract')).toBeInTheDocument();
    expect(screen.getByText('2024-07-25')).toBeInTheDocument();
    expect(screen.getByAltText('Test Title')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
