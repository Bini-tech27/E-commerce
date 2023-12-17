module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      module.exports = {
  // your ESLint configurations...

  // Add overrides to disable ESLint for specific files or directories
  overrides: [
    {
      files: ['**/*.js'], // Adjust the glob pattern based on your needs
      rules: {
        // Disable all ESLint rules for the specified files
        'eslint-disable': 'off',
      },
    },
  ],
}
    ],
  },

}

