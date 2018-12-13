import getTextWithNewLines from '../src/utils/spell'

const NEW_LINE = '\n'
const CARRIAGE_RETURN = '\r'
const INVISIBLE_SEPARATOR = '\u2063'
const CORRECT_RESULT = '\u2063\n'

describe('Spell', () => {
  it('render a regular string correctly', () => {
    expect(getTextWithNewLines('hejsan hoppsan')).toBe('hejsan hoppsan')
  })
  it('makes a line break correctly', () => {
    expect(getTextWithNewLines('hej\ndå')).toBe('hej\u2063\ndå')
  })
  it('makes two line breaks correctly', () => {
    expect(getTextWithNewLines('hej\ndå\nrå')).toBe('hej\u2063\ndå\u2063\nrå')
  })
  it('makes three line breaks correctly', () => {
    expect(getTextWithNewLines('1\n2\n3\n')).toBe('1\u2063\n2\u2063\n3\u2063\n')
  })
  it('makes a multiple line breaks correctly', () => {
    expect(getTextWithNewLines('1\n2\n\n3\n\n\n!')).toBe(
      '1\u2063\n2\u2063\n\u2063\n3\u2063\n\u2063\n\u2063\n!'
    )
  })
  it('makes a carriage return a line breaks correctly', () => {
    expect(getTextWithNewLines('1\r2')).toBe('1\u2063\n2')
  })
  it('makes two carriage return a line breaks correctly', () => {
    expect(getTextWithNewLines('1\r\r2')).toBe('1\u2063\n\u2063\n2')
  })
  it('makes multiple carriage return a line breaks correctly', () => {
    expect(getTextWithNewLines('1\r2\r\n3\r\n\n!')).toBe(
      '1\u2063\n2\u2063\n3\u2063\n\u2063\n!'
    )
  })
  it('makes a insta post line breaks correctly', () => {
    expect(
      getTextWithNewLines('Hej kolla min bild\n\r\nen selfie\n\n#selfie')
    ).toBe('Hej kolla min bild\u2063\n\u2063\nen selfie\u2063\n\u2063\n#selfie')
  })
  it('makes a insta post with emojis line breaks correctly', () => {
    expect(
      getTextWithNewLines('Hej kolla min bild📸\n\r\nen selfie 😊 \n\n #selfie')
    ).toBe(
      'Hej kolla min bild📸\u2063\n\u2063\nen selfie 😊 \u2063\n\u2063\n #selfie'
    )
  })
  it('makes niklas insta post correctly', () => {
    expect(
      getTextWithNewLines(
        'Checking out Vietnam for a while 🍲🛵👨‍💻🇻🇳\n\n#hcmc #itechblackvietnam #svenskanomader'
      )
    ).toBe(
      'Checking out Vietnam for a while 🍲🛵👨‍💻🇻🇳\u2063\n\u2063\n#hcmc #itechblackvietnam #svenskanomader'
    )
  })
  it('makes starting line breaks correctly', () => {
    expect(
      getTextWithNewLines(
        '\n\rChecking out Vietnam for a while 🍲🛵👨‍💻🇻🇳\n\n#hcmc #itechblackvietnam #svenskanomader'
      )
    ).toBe(
      '\u2063\n\u2063\nChecking out Vietnam for a while 🍲🛵👨‍💻🇻🇳\u2063\n\u2063\n#hcmc #itechblackvietnam #svenskanomader'
    )
  })
  it('makes ending line breaks correctly', () => {
    expect(
      getTextWithNewLines(
        'Checking out Vietnam for a while 🍲🛵👨‍💻🇻🇳\n\n#hcmc #itechblackvietnam #svenskanomader\n\r'
      )
    ).toBe(
      'Checking out Vietnam for a while 🍲🛵👨‍💻🇻🇳\u2063\n\u2063\n#hcmc #itechblackvietnam #svenskanomader\u2063\n\u2063\n'
    )
  })
  it('should handle a single invisible separator as input', () => {
    expect(getTextWithNewLines(INVISIBLE_SEPARATOR)).toBe(INVISIBLE_SEPARATOR)
  })
  it('should handle a single new line as input', () => {
    expect(getTextWithNewLines(NEW_LINE)).toBe(CORRECT_RESULT)
  })
  it('should handle a single carriage return as input', () => {
    expect(getTextWithNewLines(CARRIAGE_RETURN)).toBe(CORRECT_RESULT)
  })
  it('should handle a carriage return and a new line as input', () => {
    expect(getTextWithNewLines(CARRIAGE_RETURN + NEW_LINE)).toBe(CORRECT_RESULT)
  })
  it('should handle a new line and a carriage return as input', () => {
    expect(getTextWithNewLines(NEW_LINE + CARRIAGE_RETURN)).toBe(
      CORRECT_RESULT + CORRECT_RESULT
    )
  })
})
