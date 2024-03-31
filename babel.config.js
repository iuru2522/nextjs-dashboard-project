// module.exports = {
//     presets: [
//       ['@babel/preset-env', {targets: {node: 'current'}}],
//       '@babel/preset-typescript',
//     ],
//   };



module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
      '@babel/preset-react' // Add this line for JSX support
    ],
  };
  