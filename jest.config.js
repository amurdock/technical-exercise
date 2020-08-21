module.exports = {
  roots: [
    // comment the following line out if you're not using the aggregator
    'packages/aggregator/src',
    'packages/api/src',
    'packages/app/src',
  ],
  rootDir: process.cwd(),
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec|api))\\.jsx?$',
  testEnvironment: 'node',
}
