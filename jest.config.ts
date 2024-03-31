const config = {
    // Root directory where Jest starts looking for files (optional, defaults to project root)
    // rootDir: './',
  
    // Module file extensions
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
    // Mock out resources like CSS or images
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
        // '@/app/ui/fonts/(.*)$': '<rootDir>/app/ui/fonts/$1',
        // "~app/(.*)": "<rootDir>"
        // '^(\\.{1,2}/.*)\\.tsx$': '$1'
        // '^(\\.{1,2}/.*)\\.ts$': '$1'
        '/app/ui/fonts/(.*)$': '<rootDir>/app/ui/fonts/$1',
    },
  
    // Test environment (jsdom is suitable for React testing)
    testEnvironment: 'jsdom',
  
    // Prevent caching test results
    cache: false,
  
    // List of paths to setup modules before each test (optional)
    // setupFiles: ['<rootDir>/jest.setup.js'],
  
    // Transformation options
    transform: {
      // '^.+\\.(ts|tsx)$': 'ts-jest',

      '^.+\\.tsx?$': 'babel-jest',

      // Remove babel-jest if unnecessary (based on your project setup)
      // '^.+\\.(js|jsx)$': 'babel-jest',
    },
  
    // Skip transforming specific file patterns (exclude node_modules and Next.js build)
    transformIgnorePatterns: ['/node_modules/', '/.next/'],
  
    // Options for jsdom test environment
    testEnvironmentOptions: {
      // Consider enabling virtual console for debugging
      // virtualConsole: true,
    },
    
    // modulePaths: [
    //   "<rootDir>/app", // Assuming your project root is the base path
    //   // Add additional paths here if required
    // ],

    // "modulePaths": [ "<rootDir>/src" ],
  
    // Report each test individually during the run (optional)
    // verbose: true,
  };
