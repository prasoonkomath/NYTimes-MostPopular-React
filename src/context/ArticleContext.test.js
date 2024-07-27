import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react'; 
import { ArticleProvider, useArticles } from './ArticleContext';

// Test component to consume the context
const TestComponent = () => {
  const { mostPopular, setmostPopular } = useArticles();
  return (
    <div>
      <button onClick={() => setmostPopular([{ title: 'Test Article' }])}>
        Add Article
      </button>
      {mostPopular.map((article, index) => (
        <p key={index}>{article.title}</p>
      ))}
    </div>
  );
};

describe('ArticleContext', () => {
  test('provides and consumes the context correctly', () => {
    act(() => {
      render(
        <ArticleProvider>
          <TestComponent />
        </ArticleProvider>
      );
    });

    // Check that the context is initially empty
    expect(screen.queryByText('Test Article')).toBeNull();
    
    act(() => {
      screen.getByText('Add Article').click();
    });
    
    expect(screen.getByText('Test Article')).toBeInTheDocument();
  });
});
