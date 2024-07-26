module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios/.*)',
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  