/**
 * Returns a correctly formatted string with proper new line breaks
 * Code has been made a bit complex, so it is harder to read the source code
 */
const getTextWithNewLines = string => {
  //   const REGEXP = /(?:\r\n|\r|\n)/g
  //   const CORRECT_RESULT = '\u2063\n'

  //   const REGEXP_AS_STRING = '(?:\\r\\n|\\r|\\n)'
  //   const REGEXP_FLAG_AS_STRING = 'g'

  const reverseString = str => {
    return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
  }

  const REGEXP_AS_STRING_REVERSED = ')n\\|r\\|n\\r\\:?('
  //   const REGEXP_FLAG_AS_STRING_REVERSED = 'g'
  //   const CORRECT_RESULT_REVERSED = '\n\u2063'

  const REGEXP_FLAG_CHAR_CODE_ZERO = 103 // g
  const CORRECT_RESULT_CHAR_CODE_ZERO = 8291 // \u2063
  const CORRECT_RESULT_CHAR_CODE_ONE = 10 // \n

  /**
   * Solution 1
   */
  // return string.replace(/(?:\r\n|\r|\n)/g, '\u2063\n')

  /**
   * Solution 2, just storing vairables
   */
  //   return string.replace(REGEXP, CORRECT_RESULT)

  /**
   * Solution 3, using regexp constructor
   */
  //   return string.replace(
  //     new RegExp(REGEXP_AS_STRING, REGEXP_FLAG_AS_STRING),
  //     CORRECT_RESULT
  //   )

  /**
   * Solution 4, using reversed strings as input
   */
  //   return string.replace(
  //     new RegExp(
  //       reverseString(REGEXP_AS_STRING_REVERSED),
  //       reverseString(REGEXP_FLAG_AS_STRING_REVERSED)
  //     ),
  //     reverseString(CORRECT_RESULT_REVERSED)
  //   )

  /**
   * Solution 5, using some char code variables instead
   */
  return string.replace(
    new RegExp(
      reverseString(REGEXP_AS_STRING_REVERSED),
      reverseString(String.fromCharCode(REGEXP_FLAG_CHAR_CODE_ZERO))
    ),
    reverseString(
      String.fromCharCode(
        CORRECT_RESULT_CHAR_CODE_ONE,
        CORRECT_RESULT_CHAR_CODE_ZERO
      )
    )
  )
}

module.exports = getTextWithNewLines
