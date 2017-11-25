module.exports = {
  verbose: true,
  testEnvironment: 'node',
  mapCoverage: true,
  collectCoverage: true,
  coverageDirectory: './coverage/backend',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  rootDir: '../',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ]
};
