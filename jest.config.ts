// const config = {
//     // Root directory where Jest starts looking for files (optional, defaults to project root)
//     // rootDir: './',
  
//     // Module file extensions
//     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
//     // Mock out resources like CSS or images
//     moduleNameMapper: {
//       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//       '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//         '<rootDir>/__mocks__/fileMock.js',
//         // '@/app/ui/fonts/(.*)$': '<rootDir>/app/ui/fonts/$1',
//         // "~app/(.*)": "<rootDir>"
//         // '^(\\.{1,2}/.*)\\.tsx$': '$1'
//         // '^(\\.{1,2}/.*)\\.ts$': '$1'
//         '/app/ui/fonts/(.*)$': '<rootDir>/app/ui/fonts/$1',
//     },
  
//     // Test environment (jsdom is suitable for React testing)
//     testEnvironment: 'jsdom',
  
//     // Prevent caching test results
//     cache: false,
  
//     // List of paths to setup modules before each test (optional)
//     // setupFiles: ['<rootDir>/jest.setup.js'],
  
//     // Transformation options
//     transform: {
//       // '^.+\\.(ts|tsx)$': 'ts-jest',

//       '^.+\\.tsx?$': 'babel-jest',

//       // Remove babel-jest if unnecessary (based on your project setup)
//       // '^.+\\.(js|jsx)$': 'babel-jest',
//     },
  
//     // Skip transforming specific file patterns (exclude node_modules and Next.js build)
//     transformIgnorePatterns: ['/node_modules/', '/.next/'],
  
//     // Options for jsdom test environment
//     testEnvironmentOptions: {
//       // Consider enabling virtual console for debugging
//       // virtualConsole: true,
//     },
    
//     // modulePaths: [
//     //   "<rootDir>/app", // Assuming your project root is the base path
//     //   // Add additional paths here if required
//     // ],

//     // "modulePaths": [ "<rootDir>/src" ],
  
//     // Report each test individually during the run (optional)
//     // verbose: true,
//   };


// const nextJest = require('next/jest')
 
// // Providing the path to your Next.js app which will enable loading next.config.js and .env files
// const createJestConfig = nextJest({ dir: './' })
 
// // Any custom config you want to pass to Jest
// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

//   testEnvironment: 'jsdom',

// }
 
// // createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
// module.exports = createJestConfig(customJestConfig)




import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },  

  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    // '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/(.*)$': '<rootDir>/$1',
  }
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)