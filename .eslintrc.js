module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["import"],
  rules: {
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["error"],
      },
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions"],
      },
    ],
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: ["date-fns"],
        patterns: ["../*", "@mui/*/*/*", "!@mui/material/test-utils/*"],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "components/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "no-return-await": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
  ],
  ignorePatterns: ["src/**/public/**/*", "cypress/**"],
};
