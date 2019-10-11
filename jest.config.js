const path = require('path')

module.exports = {
  rootDir: './src',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFiles: [
    path.resolve('setup-jest/mock-request-animation-frame.js')
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'logger.js'
  ],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)']
}
