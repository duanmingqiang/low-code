module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        'plugin:vue/vue3-recommended'
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // 'vue/script-setup-uses-vars': 'error'
        'vue/script-setup-uses-vars': 'error',
        'vue/custom-event-name-casing': 'off',
        'no-use-before-define': 'off',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'space-before-function-paren': 'off',

        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        "vue/multi-word-component-names": ["off", {
            "ignores": []
            }]
    }
    // ignorePatterns: ['*.sh', 'node_modules', '*.md', '*.woff', '*.ttf', '.vscode', '.idea', 'dist', '/public', '/docs', '.husky', '.local', '/bin', 'Dockerfile']
}
