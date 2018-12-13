/**
 * Returns the number of new lines in a correctly formatted string
 */
const getNumberOfNewLines = string => string.split('\u2063\n').length - 1

module.exports = getNumberOfNewLines
