module.exports = {
    roots: ['<rootDir>/src'],
    modulePaths: ['<rootDir>/src'],
    transform: {
      '^.+\\.(js|ts|tsx?)$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json',],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|xlsx)$':
        '<rootDir>/src/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
      '@components/(.*)$': '<rootDir>/src/client/components/$1',
      '@components$': '<rootDir>/src/client/components/index.ts',
    },
    setupFiles: ['./setupJest.ts'],
    globals: {
      __CLIENT__: true,
      __SERVER__: true,
      __DEV__: true,
      __TEST__: true,
    },
  };
  