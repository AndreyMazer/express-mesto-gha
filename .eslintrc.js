module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "airbnb-base",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "eol-last": [
    "error",
    "never"
  ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_id"
        ]
      }
    ]
  }
}