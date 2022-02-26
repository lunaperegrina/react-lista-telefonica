/* eslint-disable eol-last */
/* eslint-disable indent */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'linebreak-style': 'off',
        indent: 'off',
        'react/jsx-filename-extension': 'off',
        'react/state-in-constructor': 'off',
        'no-console': 'off',
        'no-useless-return': 'off',
        'import/no-duplicates': 'off',
        'react/forbid-prop-types': 'off',
        'no-unused-vars': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-unused-state': 'off',
        'react/destructuring-assignment': 'off',
        'react/style-prop-object': 'off',
        'no-return-assign': 'off',
        'consistent-return': 'off',
        'no-use-before-define': 'off',
        'eol-last': 'off',
    },
};