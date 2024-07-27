import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ArticleProvider } from "../context/ArticleContext";
import PopularNews from "./PopularNews";
import axios from "../axios";
import { act } from "react";

// Mock NewsBlock component
jest.mock("./NewsBlock", () => ({ title, abstract, imageUrl, date }) => (
  <div>
    <h3>{title}</h3>
    <p>{abstract}</p>
    <img src={imageUrl} alt={title} />
    <span>{date}</span>
  </div>
));

// Mock axios
jest.mock("../axios");

describe("PopularNews", () => {
  const renderComponent = () =>
    render(
      <ArticleProvider>
        <MemoryRouter>
          <PopularNews />
        </MemoryRouter>
      </ArticleProvider>
    );

  test('renders loading state initially', async () => {
    axios.get.mockImplementationOnce(() => 
      new Promise((resolve) => setTimeout(() => resolve({ data: { results: [] } }), 100))
    );

    renderComponent();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for loading state to transition
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });

  test("renders error message on fetch failure", async () => {
    axios.get.mockRejectedValueOnce(new Error("Error fetching article"));

    await act(async () => {
      renderComponent();
    });

    await waitFor(() => {
      expect(screen.getByText("Error fetching article")).toBeInTheDocument();
    });
  });

  test("renders articles on successful fetch", async () => {
    const mockArticles = [
      {
        id: 1,
        title: "Test Title 1",
        abstract: "Test Abstract 1",
        published_date: "2024-07-25",
        media: [
          {
            "media-metadata": [
              {
                format: "mediumThreeByTwo440",
                url: "https://example.com/image1.jpg",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Test Title 2",
        abstract: "Test Abstract 2",
        published_date: "2024-07-26",
        media: [
          {
            "media-metadata": [
              {
                format: "mediumThreeByTwo440",
                url: "https://example.com/image2.jpg",
              },
            ],
          },
        ],
      },
    ];

    axios.get.mockResolvedValueOnce({ data: { results: mockArticles } });

    await act(async () => {
      renderComponent();
    });

    await waitFor(() => {
      expect(screen.getByText("Test Title 1")).toBeInTheDocument();
      expect(screen.getByText("Test Title 2")).toBeInTheDocument();
    });
  });
});
