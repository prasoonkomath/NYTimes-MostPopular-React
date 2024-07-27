import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { act } from 'react'; 
import Root from './Root';
import Header from './Header';
import Footer from './Footer';

// Mock the child components
jest.mock('./Header', () => () => <div>Header</div>);
jest.mock('./Footer', () => () => <div>Footer</div>);

describe('Root component', () => {
  const routes = [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <div>Outlet</div>
        }
      ]
    }
  ];

  const renderComponent = async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    await act(async () => {
      render(
        <RouterProvider router={router} />
      );
    });
  };

  test('renders Header, Outlet, and Footer components', async () => {
    await renderComponent();

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Outlet')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
