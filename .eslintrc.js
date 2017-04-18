module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    extends: 'eslint:recommended',
    env: {
        browser: true
    },
    rules: {
        "arrow-body-style": ["error", "always"],
        "arrow-parens": ["error", "always"],
        "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],
        'arrow-spacing': ['error', {before: true, after: true}],
        'block-spacing': ['error', 'always'],
        'comma-spacing': ['error', {before: false, after: true}],
        'no-mixed-spaces-and-tabs': 'error',
    },
    "globals": {
        "jQuery": true,
        "$": true,
        "document": true,
        "window": true,
        "Ember": true
    }
};
