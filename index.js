'use strict';

module.exports = {
    "extends": [
        "jsfile"
    ],
    "rules": {
        // JUSTIFICATION: code cleanliness
        // separation of variable declarations and logic makes source code more readable
        "newline-after-var": [
            "error",
            "always"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": true
            }
        ],
        "eol-last": [
            "off"
        ],
        "no-extra-semi": [
            "off"
        ],
        "no-invalid-this": [
            "off"
        ],
        "prefer-reflect": [
            "off"
        ],
        "no-warning-comments": [
            "off"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "quotes": [
            "error",
            "single",
            "avoid-escape"
        ]
    }
};
