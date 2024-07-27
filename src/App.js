import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import Root from "./components/Root";
import { ArticleProvider } from "./context/ArticleContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/:newsId", element: <DetailPage /> },
    ],
  },
]);

function App() {
  return (
    <ArticleProvider>
      <RouterProvider router={router} />
    </ArticleProvider>
  );
}
export default App;