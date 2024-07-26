// src/pages/DetailPage.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ArticleProvider } from '../context/ArticleContext';
import DetailPage from './DetailPage';
import axios from '../axios';

// Mock PopularNews component
jest.mock('../components/PopularNews', () => () => <div>Popular News</div>);

// Mock axios
jest.mock('../axios');

describe('DetailPage - Loading State', () => {
  const renderComponent = () =>
    render(
      <ArticleProvider>
        <MemoryRouter initialEntries={['/123']}>
          <Routes>
            <Route path="/:newsId" element={<DetailPage />} />
          </Routes>
        </MemoryRouter>
      </ArticleProvider>
    );

  test('renders loading state initially', () => {
    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

describe('DetailPage - Error State', () => {
  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('Error fetching article'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <ArticleProvider>
        <MemoryRouter initialEntries={['/123']}>
          <Routes>
            <Route path="/:newsId" element={<DetailPage />} />
          </Routes>
        </MemoryRouter>
      </ArticleProvider>
    );

  test('renders error message on fetch failure', async () => {
    renderComponent();
    await waitFor(() => {
      expect(screen.getByText('Error fetching article')).toBeInTheDocument();
    });
  });
});

describe('DetailPage - Article Details', () => {
  const mockArticle = {
    id: 123,
    title: 'Test Article Title',
    abstract: 'Test Article Abstract',
    byline: 'Test Byline',
    published_date: '2024-07-25',
    media: [{
      'media-metadata': [
        { format: 'mediumThreeByTwo440', url: 'https://example.com/image.jpg' }
      ]
    }]
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { results: [mockArticle] } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <ArticleProvider>
        <MemoryRouter initialEntries={['/123']}>
          <Routes>
            <Route path="/:newsId" element={<DetailPage />} />
          </Routes>
        </MemoryRouter>
      </ArticleProvider>
    );

  test('renders article details', async () => {
    renderComponent();
    await waitFor(() => {
      expect(screen.getByText('Test Article Title')).toBeInTheDocument();
    });
    expect(screen.getByText('Test Article Abstract')).toBeInTheDocument();
    expect(screen.getByText('Test Byline | Published on: 2024-07-25')).toBeInTheDocument();
    expect(screen.getByAltText('Test Article Title')).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
