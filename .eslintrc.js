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
    },
};