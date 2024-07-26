import React, { createContext, useState, useContext } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [mostPopular, setmostPopular] = useState([]);

  return (
    <ArticleContext.Provider value={{ mostPopular, setmostPopular }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => useContext(ArticleContext);
