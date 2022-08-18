module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).(ts|js)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  coverageReporters: ['html', 'text'],
  coverageDirectory: 'coverage',
};
