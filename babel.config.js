// module.exports = {
//   presets: ["@babel/preset-env"],
// };

// // jest.config.js
// export const jestConfig = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.js?$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   extensionsToTreatAsEsm: [".js"],
//   globals: {
//     "ts-jest": {
//       useESM: true,
//     },
//   },
// };


module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
