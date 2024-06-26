module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true, jest: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "quote-props": ["error", "consistent-as-needed"],
        "indent": ["error", 4, { SwitchCase: 1 }],
        "quotes": ["error", "double"],
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "react-hooks/exhaustive-deps": 0,
        "react/prop-types": 0,
        "no-unused-vars": 0,
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
}
