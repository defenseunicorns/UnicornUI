// jest.config.js
export default {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true
      }
    ]
  },
  modulePathIgnorePatterns: ['/playwright-tests/'],
  moduleFileExtensions: ['js', 'ts', 'svelte']
};
