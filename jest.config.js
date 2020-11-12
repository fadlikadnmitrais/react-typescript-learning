module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // make '@testing-library/jest-dom' is always available globally when called in any test file
  setupFilesAfterEnv: ['<rootDir>/src/__test__/config/importJestDOM.ts'],
  // ModuleNameMapper replaces some modules with what you indicated
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__test__/mock/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/src/__test__/mock/styleMock.ts",
  }
};