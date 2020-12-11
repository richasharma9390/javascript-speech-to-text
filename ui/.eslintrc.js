module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "modules": true,
            "arrowFunctions": true,
            "classes": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
        "window": true,
        "document": true,
        "localStorage": true,
        "cordova": true,
        "Connection": true,
        "WL": true
    },
    "rules": {
        "arrow-body-style": "off",
        // "indent": [
        //     "error",
        //     4
        // ],
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-underscore-dangle": ["error", { "allow": ["_action", "_dbcount", "_responsedata", "_responsemeta", "_data", "_meta"] }],
        "no-console": ["error", { "allow": ["log", "warn", "error"] }],
        "max-len": ["error", 300],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-shadow": [2, { "builtinGlobals": false, "hoist": "functions", "allow": [] }],
        "import/prefer-default-export": "off",
        "react/prop-types": 0,
        "no-use-before-define": ["error", { "functions": false }],
        "linebreak-style": ["error", "windows"],
    }
};