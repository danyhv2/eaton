module.exports = {

  options: {
    formatter: 'stylish' // 'table'
  },

  rules: {

    /**
     * NOTE: Force Errors for most of the rules.
     * ------
     * ERROR Level: Severity should be one of the following:
     * 0 = off
     * 1 = warning
     * 2 = error
     */

    'class-name-format': [ 2, {'allow-leading-underscore': true, 'convention': 'hyphenatedbem' } ],
    'clean-import-paths': 0, // Disabled since we are using SASS Globbings when importing entire folders
    'empty-args': 0, // Disabled for consistency when writing mixins
    'empty-line-between-blocks': 2,
    'final-newline': 2,
    'force-element-nesting': 0,
    'force-pseudo-nesting': 2,
    'hex-notation': 0,
    'indentation': [ 2, { size: 2 } ],
    'leading-zero': [ 2, { include: true } ],
    'mixins-before-declarations': 0,
    'nesting-depth': [ 2, { 'max-depth': 4 } ],
    'no-color-literals': 2,
    'no-css-comments': 2,
    'no-duplicate-properties': [ 2, { exclude: ['display', 'color', 'border-color', 'font-size' ] } ], // Exclude these properties since sometimes they are used as fallback for older browsers
    'no-empty-rulesets': 0, // Disabled since empty selectors are used for future reference, and the are no compiled by SASS
    'no-ids': 2,
    'no-important': 1,
    'no-trailing-zero': 2,
    'no-vendor-prefixes': 2,
    'pseudo-element': 2,
    'property-sort-order': 0,
    'quotes': 0,
    'trailing-semicolon': 2,
    'variable-name-format': [ 2, { 'allow-leading-underscore': true, 'convention': 'hyphenatedbem' } ],
    'zero-unit': 2

  }
}
