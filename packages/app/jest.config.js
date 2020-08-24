module.exports = {
  rootDir: process.cwd(),
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec|api))\\.jsx?$',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/setupTests.js'],
}
