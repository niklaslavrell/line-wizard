const getBoldText = text => {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i)
    const boldChar = UNICODE_MAP.unicode.font[1].letter.filter(
      trans => trans._source === char
    )
    if (boldChar[0]) {
      result += boldChar[0]._target
    } else {
      result += char
    }
  }
  return result
}

module.exports = getBoldText

const UNICODE_MAP = {
  unicode: {
    font: [
      {
        letter: [
          {
            _source: 'a',
            _target: 'a',
          },
          {
            _source: 'b',
            _target: 'b',
          },
          {
            _source: 'c',
            _target: 'c',
          },
          {
            _source: 'd',
            _target: 'd',
          },
          {
            _source: 'e',
            _target: 'e',
          },
          {
            _source: 'f',
            _target: 'f',
          },
          {
            _source: 'g',
            _target: 'g',
          },
          {
            _source: 'h',
            _target: 'h',
          },
          {
            _source: 'i',
            _target: 'i',
          },
          {
            _source: 'j',
            _target: 'j',
          },
          {
            _source: 'k',
            _target: 'k',
          },
          {
            _source: 'l',
            _target: 'l',
          },
          {
            _source: 'm',
            _target: 'm',
          },
          {
            _source: 'n',
            _target: 'n',
          },
          {
            _source: 'o',
            _target: 'o',
          },
          {
            _source: 'p',
            _target: 'p',
          },
          {
            _source: 'q',
            _target: 'q',
          },
          {
            _source: 'r',
            _target: 'r',
          },
          {
            _source: 's',
            _target: 's',
          },
          {
            _source: 't',
            _target: 't',
          },
          {
            _source: 'u',
            _target: 'u',
          },
          {
            _source: 'v',
            _target: 'v',
          },
          {
            _source: 'w',
            _target: 'w',
          },
          {
            _source: 'x',
            _target: 'x',
          },
          {
            _source: 'y',
            _target: 'y',
          },
          {
            _source: 'z',
            _target: 'z',
          },
          {
            _source: 'A',
            _target: 'A',
          },
          {
            _source: 'B',
            _target: 'B',
          },
          {
            _source: 'C',
            _target: 'C',
          },
          {
            _source: 'D',
            _target: 'D',
          },
          {
            _source: 'E',
            _target: 'E',
          },
          {
            _source: 'F',
            _target: 'F',
          },
          {
            _source: 'G',
            _target: 'G',
          },
          {
            _source: 'H',
            _target: 'H',
          },
          {
            _source: 'I',
            _target: 'I',
          },
          {
            _source: 'J',
            _target: 'J',
          },
          {
            _source: 'K',
            _target: 'K',
          },
          {
            _source: 'L',
            _target: 'L',
          },
          {
            _source: 'M',
            _target: 'M',
          },
          {
            _source: 'N',
            _target: 'N',
          },
          {
            _source: 'O',
            _target: 'O',
          },
          {
            _source: 'P',
            _target: 'P',
          },
          {
            _source: 'Q',
            _target: 'Q',
          },
          {
            _source: 'R',
            _target: 'R',
          },
          {
            _source: 'S',
            _target: 'S',
          },
          {
            _source: 'T',
            _target: 'T',
          },
          {
            _source: 'U',
            _target: 'U',
          },
          {
            _source: 'V',
            _target: 'V',
          },
          {
            _source: 'W',
            _target: 'W',
          },
          {
            _source: 'X',
            _target: 'X',
          },
          {
            _source: 'Y',
            _target: 'Y',
          },
          {
            _source: 'Z',
            _target: 'Z',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'serif',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝐚',
          },
          {
            _source: 'b',
            _target: '𝐛',
          },
          {
            _source: 'c',
            _target: '𝐜',
          },
          {
            _source: 'd',
            _target: '𝐝',
          },
          {
            _source: 'e',
            _target: '𝐞',
          },
          {
            _source: 'f',
            _target: '𝐟',
          },
          {
            _source: 'g',
            _target: '𝐠',
          },
          {
            _source: 'h',
            _target: '𝐡',
          },
          {
            _source: 'i',
            _target: '𝐢',
          },
          {
            _source: 'j',
            _target: '𝐣',
          },
          {
            _source: 'k',
            _target: '𝐤',
          },
          {
            _source: 'l',
            _target: '𝐥',
          },
          {
            _source: 'm',
            _target: '𝐦',
          },
          {
            _source: 'n',
            _target: '𝐧',
          },
          {
            _source: 'o',
            _target: '𝐨',
          },
          {
            _source: 'p',
            _target: '𝐩',
          },
          {
            _source: 'q',
            _target: '𝐪',
          },
          {
            _source: 'r',
            _target: '𝐫',
          },
          {
            _source: 's',
            _target: '𝐬',
          },
          {
            _source: 't',
            _target: '𝐭',
          },
          {
            _source: 'u',
            _target: '𝐮',
          },
          {
            _source: 'v',
            _target: '𝐯',
          },
          {
            _source: 'w',
            _target: '𝐰',
          },
          {
            _source: 'x',
            _target: '𝐱',
          },
          {
            _source: 'y',
            _target: '𝐲',
          },
          {
            _source: 'z',
            _target: '𝐳',
          },
          {
            _source: 'A',
            _target: '𝐀',
          },
          {
            _source: 'B',
            _target: '𝐁',
          },
          {
            _source: 'C',
            _target: '𝐂',
          },
          {
            _source: 'D',
            _target: '𝐃',
          },
          {
            _source: 'E',
            _target: '𝐄',
          },
          {
            _source: 'F',
            _target: '𝐅',
          },
          {
            _source: 'G',
            _target: '𝐆',
          },
          {
            _source: 'H',
            _target: '𝐇',
          },
          {
            _source: 'I',
            _target: '𝐈',
          },
          {
            _source: 'J',
            _target: '𝐉',
          },
          {
            _source: 'K',
            _target: '𝐊',
          },
          {
            _source: 'L',
            _target: '𝐋',
          },
          {
            _source: 'M',
            _target: '𝐌',
          },
          {
            _source: 'N',
            _target: '𝐍',
          },
          {
            _source: 'O',
            _target: '𝐎',
          },
          {
            _source: 'P',
            _target: '𝐏',
          },
          {
            _source: 'Q',
            _target: '𝐐',
          },
          {
            _source: 'R',
            _target: '𝐑',
          },
          {
            _source: 'S',
            _target: '𝐒',
          },
          {
            _source: 'T',
            _target: '𝐓',
          },
          {
            _source: 'U',
            _target: '𝐔',
          },
          {
            _source: 'V',
            _target: '𝐕',
          },
          {
            _source: 'W',
            _target: '𝐖',
          },
          {
            _source: 'X',
            _target: '𝐗',
          },
          {
            _source: 'Y',
            _target: '𝐘',
          },
          {
            _source: 'Z',
            _target: '𝐙',
          },
          {
            _source: '0',
            _target: '𝟎',
          },
          {
            _source: '1',
            _target: '𝟏',
          },
          {
            _source: '2',
            _target: '𝟐',
          },
          {
            _source: '3',
            _target: '𝟑',
          },
          {
            _source: '4',
            _target: '𝟒',
          },
          {
            _source: '5',
            _target: '𝟓',
          },
          {
            _source: '6',
            _target: '𝟔',
          },
          {
            _source: '7',
            _target: '𝟕',
          },
          {
            _source: '8',
            _target: '𝟖',
          },
          {
            _source: '9',
            _target: '𝟗',
          },
          {
            _source: '!',
            _target: '❗',
          },
          {
            _source: '?',
            _target: '❓',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'serif-bold',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝑎',
          },
          {
            _source: 'b',
            _target: '𝑏',
          },
          {
            _source: 'c',
            _target: '𝑐',
          },
          {
            _source: 'd',
            _target: '𝑑',
          },
          {
            _source: 'e',
            _target: '𝑒',
          },
          {
            _source: 'f',
            _target: '𝑓',
          },
          {
            _source: 'g',
            _target: '𝑔',
          },
          {
            _source: 'h',
            _target: 'ℎ',
          },
          {
            _source: 'i',
            _target: '𝑖',
          },
          {
            _source: 'j',
            _target: '𝑗',
          },
          {
            _source: 'k',
            _target: '𝑘',
          },
          {
            _source: 'l',
            _target: '𝑙',
          },
          {
            _source: 'm',
            _target: '𝑚',
          },
          {
            _source: 'n',
            _target: '𝑛',
          },
          {
            _source: 'o',
            _target: '𝑜',
          },
          {
            _source: 'p',
            _target: '𝑝',
          },
          {
            _source: 'q',
            _target: '𝑞',
          },
          {
            _source: 'r',
            _target: '𝑟',
          },
          {
            _source: 's',
            _target: '𝑠',
          },
          {
            _source: 't',
            _target: '𝑡',
          },
          {
            _source: 'u',
            _target: '𝑢',
          },
          {
            _source: 'v',
            _target: '𝑣',
          },
          {
            _source: 'w',
            _target: '𝑤',
          },
          {
            _source: 'x',
            _target: '𝑥',
          },
          {
            _source: 'y',
            _target: '𝑦',
          },
          {
            _source: 'z',
            _target: '𝑧',
          },
          {
            _source: 'A',
            _target: '𝐴',
          },
          {
            _source: 'B',
            _target: '𝐵',
          },
          {
            _source: 'C',
            _target: '𝐶',
          },
          {
            _source: 'D',
            _target: '𝐷',
          },
          {
            _source: 'E',
            _target: '𝐸',
          },
          {
            _source: 'F',
            _target: '𝐹',
          },
          {
            _source: 'G',
            _target: '𝐺',
          },
          {
            _source: 'H',
            _target: '𝐻',
          },
          {
            _source: 'I',
            _target: '𝐼',
          },
          {
            _source: 'J',
            _target: '𝐽',
          },
          {
            _source: 'K',
            _target: '𝐾',
          },
          {
            _source: 'L',
            _target: '𝐿',
          },
          {
            _source: 'M',
            _target: '𝑀',
          },
          {
            _source: 'N',
            _target: '𝑁',
          },
          {
            _source: 'O',
            _target: '𝑂',
          },
          {
            _source: 'P',
            _target: '𝑃',
          },
          {
            _source: 'Q',
            _target: '𝑄',
          },
          {
            _source: 'R',
            _target: '𝑅',
          },
          {
            _source: 'S',
            _target: '𝑆',
          },
          {
            _source: 'T',
            _target: '𝑇',
          },
          {
            _source: 'U',
            _target: '𝑈',
          },
          {
            _source: 'V',
            _target: '𝑉',
          },
          {
            _source: 'W',
            _target: '𝑊',
          },
          {
            _source: 'X',
            _target: '𝑋',
          },
          {
            _source: 'Y',
            _target: '𝑌',
          },
          {
            _source: 'Z',
            _target: '𝑍',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'serif-italic',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝒂',
          },
          {
            _source: 'b',
            _target: '𝒃',
          },
          {
            _source: 'c',
            _target: '𝒄',
          },
          {
            _source: 'd',
            _target: '𝒅',
          },
          {
            _source: 'e',
            _target: '𝒆',
          },
          {
            _source: 'f',
            _target: '𝒇',
          },
          {
            _source: 'g',
            _target: '𝒈',
          },
          {
            _source: 'h',
            _target: '𝒉',
          },
          {
            _source: 'i',
            _target: '𝒊',
          },
          {
            _source: 'j',
            _target: '𝒋',
          },
          {
            _source: 'k',
            _target: '𝒌',
          },
          {
            _source: 'l',
            _target: '𝒍',
          },
          {
            _source: 'm',
            _target: '𝒎',
          },
          {
            _source: 'n',
            _target: '𝒏',
          },
          {
            _source: 'o',
            _target: '𝒐',
          },
          {
            _source: 'p',
            _target: '𝒑',
          },
          {
            _source: 'q',
            _target: '𝒒',
          },
          {
            _source: 'r',
            _target: '𝒓',
          },
          {
            _source: 's',
            _target: '𝒔',
          },
          {
            _source: 't',
            _target: '𝒕',
          },
          {
            _source: 'u',
            _target: '𝒖',
          },
          {
            _source: 'v',
            _target: '𝒗',
          },
          {
            _source: 'w',
            _target: '𝒘',
          },
          {
            _source: 'x',
            _target: '𝒙',
          },
          {
            _source: 'y',
            _target: '𝒚',
          },
          {
            _source: 'z',
            _target: '𝒛',
          },
          {
            _source: 'A',
            _target: '𝑨',
          },
          {
            _source: 'B',
            _target: '𝑩',
          },
          {
            _source: 'C',
            _target: '𝑪',
          },
          {
            _source: 'D',
            _target: '𝑫',
          },
          {
            _source: 'E',
            _target: '𝑬',
          },
          {
            _source: 'F',
            _target: '𝑭',
          },
          {
            _source: 'G',
            _target: '𝑮',
          },
          {
            _source: 'H',
            _target: '𝑯',
          },
          {
            _source: 'I',
            _target: '𝑰',
          },
          {
            _source: 'J',
            _target: '𝑱',
          },
          {
            _source: 'K',
            _target: '𝑲',
          },
          {
            _source: 'L',
            _target: '𝑳',
          },
          {
            _source: 'M',
            _target: '𝑴',
          },
          {
            _source: 'N',
            _target: '𝑵',
          },
          {
            _source: 'O',
            _target: '𝑶',
          },
          {
            _source: 'P',
            _target: '𝑷',
          },
          {
            _source: 'Q',
            _target: '𝑸',
          },
          {
            _source: 'R',
            _target: '𝑹',
          },
          {
            _source: 'S',
            _target: '𝑺',
          },
          {
            _source: 'T',
            _target: '𝑻',
          },
          {
            _source: 'U',
            _target: '𝑼',
          },
          {
            _source: 'V',
            _target: '𝑽',
          },
          {
            _source: 'W',
            _target: '𝑾',
          },
          {
            _source: 'X',
            _target: '𝑿',
          },
          {
            _source: 'Y',
            _target: '𝒀',
          },
          {
            _source: 'Z',
            _target: '𝒁',
          },
          {
            _source: '0',
            _target: '𝟎',
          },
          {
            _source: '1',
            _target: '𝟏',
          },
          {
            _source: '2',
            _target: '𝟐',
          },
          {
            _source: '3',
            _target: '𝟑',
          },
          {
            _source: '4',
            _target: '𝟒',
          },
          {
            _source: '5',
            _target: '𝟓',
          },
          {
            _source: '6',
            _target: '𝟔',
          },
          {
            _source: '7',
            _target: '𝟕',
          },
          {
            _source: '8',
            _target: '𝟖',
          },
          {
            _source: '9',
            _target: '𝟗',
          },
          {
            _source: '!',
            _target: '❗',
          },
          {
            _source: '?',
            _target: '❓',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'serif-bold-italic',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝖺',
          },
          {
            _source: 'b',
            _target: '𝖻',
          },
          {
            _source: 'c',
            _target: '𝖼',
          },
          {
            _source: 'd',
            _target: '𝖽',
          },
          {
            _source: 'e',
            _target: '𝖾',
          },
          {
            _source: 'f',
            _target: '𝖿',
          },
          {
            _source: 'g',
            _target: '𝗀',
          },
          {
            _source: 'h',
            _target: '𝗁',
          },
          {
            _source: 'i',
            _target: '𝗂',
          },
          {
            _source: 'j',
            _target: '𝗃',
          },
          {
            _source: 'k',
            _target: '𝗄',
          },
          {
            _source: 'l',
            _target: '𝗅',
          },
          {
            _source: 'm',
            _target: '𝗆',
          },
          {
            _source: 'n',
            _target: '𝗇',
          },
          {
            _source: 'o',
            _target: '𝗈',
          },
          {
            _source: 'p',
            _target: '𝗉',
          },
          {
            _source: 'q',
            _target: '𝗊',
          },
          {
            _source: 'r',
            _target: '𝗋',
          },
          {
            _source: 's',
            _target: '𝗌',
          },
          {
            _source: 't',
            _target: '𝗍',
          },
          {
            _source: 'u',
            _target: '𝗎',
          },
          {
            _source: 'v',
            _target: '𝗏',
          },
          {
            _source: 'w',
            _target: '𝗐',
          },
          {
            _source: 'x',
            _target: '𝗑',
          },
          {
            _source: 'y',
            _target: '𝗒',
          },
          {
            _source: 'z',
            _target: '𝗓',
          },
          {
            _source: 'A',
            _target: '𝖠',
          },
          {
            _source: 'B',
            _target: '𝖡',
          },
          {
            _source: 'C',
            _target: '𝖢',
          },
          {
            _source: 'D',
            _target: '𝖣',
          },
          {
            _source: 'E',
            _target: '𝖤',
          },
          {
            _source: 'F',
            _target: '𝖥',
          },
          {
            _source: 'G',
            _target: '𝖦',
          },
          {
            _source: 'H',
            _target: '𝖧',
          },
          {
            _source: 'I',
            _target: '𝖨',
          },
          {
            _source: 'J',
            _target: '𝖩',
          },
          {
            _source: 'K',
            _target: '𝖪',
          },
          {
            _source: 'L',
            _target: '𝖫',
          },
          {
            _source: 'M',
            _target: '𝖬',
          },
          {
            _source: 'N',
            _target: '𝖭',
          },
          {
            _source: 'O',
            _target: '𝖮',
          },
          {
            _source: 'P',
            _target: '𝖯',
          },
          {
            _source: 'Q',
            _target: '𝖰',
          },
          {
            _source: 'R',
            _target: '𝖱',
          },
          {
            _source: 'S',
            _target: '𝖲',
          },
          {
            _source: 'T',
            _target: '𝖳',
          },
          {
            _source: 'U',
            _target: '𝖴',
          },
          {
            _source: 'V',
            _target: '𝖵',
          },
          {
            _source: 'W',
            _target: '𝖶',
          },
          {
            _source: 'X',
            _target: '𝖷',
          },
          {
            _source: 'Y',
            _target: '𝖸',
          },
          {
            _source: 'Z',
            _target: '𝖹',
          },
          {
            _source: '0',
            _target: '𝟢',
          },
          {
            _source: '1',
            _target: '𝟣',
          },
          {
            _source: '2',
            _target: '𝟤',
          },
          {
            _source: '3',
            _target: '𝟥',
          },
          {
            _source: '4',
            _target: '𝟦',
          },
          {
            _source: '5',
            _target: '𝟧',
          },
          {
            _source: '6',
            _target: '𝟨',
          },
          {
            _source: '7',
            _target: '𝟩',
          },
          {
            _source: '8',
            _target: '𝟪',
          },
          {
            _source: '9',
            _target: '𝟫',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'sans',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝗮',
          },
          {
            _source: 'b',
            _target: '𝗯',
          },
          {
            _source: 'c',
            _target: '𝗰',
          },
          {
            _source: 'd',
            _target: '𝗱',
          },
          {
            _source: 'e',
            _target: '𝗲',
          },
          {
            _source: 'f',
            _target: '𝗳',
          },
          {
            _source: 'g',
            _target: '𝗴',
          },
          {
            _source: 'h',
            _target: '𝗵',
          },
          {
            _source: 'i',
            _target: '𝗶',
          },
          {
            _source: 'j',
            _target: '𝗷',
          },
          {
            _source: 'k',
            _target: '𝗸',
          },
          {
            _source: 'l',
            _target: '𝗹',
          },
          {
            _source: 'm',
            _target: '𝗺',
          },
          {
            _source: 'n',
            _target: '𝗻',
          },
          {
            _source: 'o',
            _target: '𝗼',
          },
          {
            _source: 'p',
            _target: '𝗽',
          },
          {
            _source: 'q',
            _target: '𝗾',
          },
          {
            _source: 'r',
            _target: '𝗿',
          },
          {
            _source: 's',
            _target: '𝘀',
          },
          {
            _source: 't',
            _target: '𝘁',
          },
          {
            _source: 'u',
            _target: '𝘂',
          },
          {
            _source: 'v',
            _target: '𝘃',
          },
          {
            _source: 'w',
            _target: '𝘄',
          },
          {
            _source: 'x',
            _target: '𝘅',
          },
          {
            _source: 'y',
            _target: '𝘆',
          },
          {
            _source: 'z',
            _target: '𝘇',
          },
          {
            _source: 'A',
            _target: '𝗔',
          },
          {
            _source: 'B',
            _target: '𝗕',
          },
          {
            _source: 'C',
            _target: '𝗖',
          },
          {
            _source: 'D',
            _target: '𝗗',
          },
          {
            _source: 'E',
            _target: '𝗘',
          },
          {
            _source: 'F',
            _target: '𝗙',
          },
          {
            _source: 'G',
            _target: '𝗚',
          },
          {
            _source: 'H',
            _target: '𝗛',
          },
          {
            _source: 'I',
            _target: '𝗜',
          },
          {
            _source: 'J',
            _target: '𝗝',
          },
          {
            _source: 'K',
            _target: '𝗞',
          },
          {
            _source: 'L',
            _target: '𝗟',
          },
          {
            _source: 'M',
            _target: '𝗠',
          },
          {
            _source: 'N',
            _target: '𝗡',
          },
          {
            _source: 'O',
            _target: '𝗢',
          },
          {
            _source: 'P',
            _target: '𝗣',
          },
          {
            _source: 'Q',
            _target: '𝗤',
          },
          {
            _source: 'R',
            _target: '𝗥',
          },
          {
            _source: 'S',
            _target: '𝗦',
          },
          {
            _source: 'T',
            _target: '𝗧',
          },
          {
            _source: 'U',
            _target: '𝗨',
          },
          {
            _source: 'V',
            _target: '𝗩',
          },
          {
            _source: 'W',
            _target: '𝗪',
          },
          {
            _source: 'X',
            _target: '𝗫',
          },
          {
            _source: 'Y',
            _target: '𝗬',
          },
          {
            _source: 'Z',
            _target: '𝗭',
          },
          {
            _source: '0',
            _target: '𝟬',
          },
          {
            _source: '1',
            _target: '𝟭',
          },
          {
            _source: '2',
            _target: '𝟮',
          },
          {
            _source: '3',
            _target: '𝟯',
          },
          {
            _source: '4',
            _target: '𝟰',
          },
          {
            _source: '5',
            _target: '𝟱',
          },
          {
            _source: '6',
            _target: '𝟲',
          },
          {
            _source: '7',
            _target: '𝟳',
          },
          {
            _source: '8',
            _target: '𝟴',
          },
          {
            _source: '9',
            _target: '𝟵',
          },
          {
            _source: '!',
            _target: '❗',
          },
          {
            _source: '?',
            _target: '❓',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'sans-bold',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝘢',
          },
          {
            _source: 'b',
            _target: '𝘣',
          },
          {
            _source: 'c',
            _target: '𝘤',
          },
          {
            _source: 'd',
            _target: '𝘥',
          },
          {
            _source: 'e',
            _target: '𝘦',
          },
          {
            _source: 'f',
            _target: '𝘧',
          },
          {
            _source: 'g',
            _target: '𝘨',
          },
          {
            _source: 'h',
            _target: '𝘩',
          },
          {
            _source: 'i',
            _target: '𝘪',
          },
          {
            _source: 'j',
            _target: '𝘫',
          },
          {
            _source: 'k',
            _target: '𝘬',
          },
          {
            _source: 'l',
            _target: '𝘭',
          },
          {
            _source: 'm',
            _target: '𝘮',
          },
          {
            _source: 'n',
            _target: '𝘯',
          },
          {
            _source: 'o',
            _target: '𝘰',
          },
          {
            _source: 'p',
            _target: '𝘱',
          },
          {
            _source: 'q',
            _target: '𝘲',
          },
          {
            _source: 'r',
            _target: '𝘳',
          },
          {
            _source: 's',
            _target: '𝘴',
          },
          {
            _source: 't',
            _target: '𝘵',
          },
          {
            _source: 'u',
            _target: '𝘶',
          },
          {
            _source: 'v',
            _target: '𝘷',
          },
          {
            _source: 'w',
            _target: '𝘸',
          },
          {
            _source: 'x',
            _target: '𝘹',
          },
          {
            _source: 'y',
            _target: '𝘺',
          },
          {
            _source: 'z',
            _target: '𝘻',
          },
          {
            _source: 'A',
            _target: '𝘈',
          },
          {
            _source: 'B',
            _target: '𝘉',
          },
          {
            _source: 'C',
            _target: '𝘊',
          },
          {
            _source: 'D',
            _target: '𝘋',
          },
          {
            _source: 'E',
            _target: '𝘌',
          },
          {
            _source: 'F',
            _target: '𝘍',
          },
          {
            _source: 'G',
            _target: '𝘎',
          },
          {
            _source: 'H',
            _target: '𝘏',
          },
          {
            _source: 'I',
            _target: '𝘐',
          },
          {
            _source: 'J',
            _target: '𝘑',
          },
          {
            _source: 'K',
            _target: '𝘒',
          },
          {
            _source: 'L',
            _target: '𝘓',
          },
          {
            _source: 'M',
            _target: '𝘔',
          },
          {
            _source: 'N',
            _target: '𝘕',
          },
          {
            _source: 'O',
            _target: '𝘖',
          },
          {
            _source: 'P',
            _target: '𝘗',
          },
          {
            _source: 'Q',
            _target: '𝘘',
          },
          {
            _source: 'R',
            _target: '𝘙',
          },
          {
            _source: 'S',
            _target: '𝘚',
          },
          {
            _source: 'T',
            _target: '𝘛',
          },
          {
            _source: 'U',
            _target: '𝘜',
          },
          {
            _source: 'V',
            _target: '𝘝',
          },
          {
            _source: 'W',
            _target: '𝘞',
          },
          {
            _source: 'X',
            _target: '𝘟',
          },
          {
            _source: 'Y',
            _target: '𝘠',
          },
          {
            _source: 'Z',
            _target: '𝘡',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'sans-italic',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝙖',
          },
          {
            _source: 'b',
            _target: '𝙗',
          },
          {
            _source: 'c',
            _target: '𝙘',
          },
          {
            _source: 'd',
            _target: '𝙙',
          },
          {
            _source: 'e',
            _target: '𝙚',
          },
          {
            _source: 'f',
            _target: '𝙛',
          },
          {
            _source: 'g',
            _target: '𝙜',
          },
          {
            _source: 'h',
            _target: '𝙝',
          },
          {
            _source: 'i',
            _target: '𝙞',
          },
          {
            _source: 'j',
            _target: '𝙟',
          },
          {
            _source: 'k',
            _target: '𝙠',
          },
          {
            _source: 'l',
            _target: '𝙡',
          },
          {
            _source: 'm',
            _target: '𝙢',
          },
          {
            _source: 'n',
            _target: '𝙣',
          },
          {
            _source: 'o',
            _target: '𝙤',
          },
          {
            _source: 'p',
            _target: '𝙥',
          },
          {
            _source: 'q',
            _target: '𝙦',
          },
          {
            _source: 'r',
            _target: '𝙧',
          },
          {
            _source: 's',
            _target: '𝙨',
          },
          {
            _source: 't',
            _target: '𝙩',
          },
          {
            _source: 'u',
            _target: '𝙪',
          },
          {
            _source: 'v',
            _target: '𝙫',
          },
          {
            _source: 'w',
            _target: '𝙬',
          },
          {
            _source: 'x',
            _target: '𝙭',
          },
          {
            _source: 'y',
            _target: '𝙮',
          },
          {
            _source: 'z',
            _target: '𝙯',
          },
          {
            _source: 'A',
            _target: '𝘼',
          },
          {
            _source: 'B',
            _target: '𝘽',
          },
          {
            _source: 'C',
            _target: '𝘾',
          },
          {
            _source: 'D',
            _target: '𝘿',
          },
          {
            _source: 'E',
            _target: '𝙀',
          },
          {
            _source: 'F',
            _target: '𝙁',
          },
          {
            _source: 'G',
            _target: '𝙂',
          },
          {
            _source: 'H',
            _target: '𝙃',
          },
          {
            _source: 'I',
            _target: '𝙄',
          },
          {
            _source: 'J',
            _target: '𝙅',
          },
          {
            _source: 'K',
            _target: '𝙆',
          },
          {
            _source: 'L',
            _target: '𝙇',
          },
          {
            _source: 'M',
            _target: '𝙈',
          },
          {
            _source: 'N',
            _target: '𝙉',
          },
          {
            _source: 'O',
            _target: '𝙊',
          },
          {
            _source: 'P',
            _target: '𝙋',
          },
          {
            _source: 'Q',
            _target: '𝙌',
          },
          {
            _source: 'R',
            _target: '𝙍',
          },
          {
            _source: 'S',
            _target: '𝙎',
          },
          {
            _source: 'T',
            _target: '𝙏',
          },
          {
            _source: 'U',
            _target: '𝙐',
          },
          {
            _source: 'V',
            _target: '𝙑',
          },
          {
            _source: 'W',
            _target: '𝙒',
          },
          {
            _source: 'X',
            _target: '𝙓',
          },
          {
            _source: 'Y',
            _target: '𝙔',
          },
          {
            _source: 'Z',
            _target: '𝙕',
          },
          {
            _source: '0',
            _target: '𝟎',
          },
          {
            _source: '1',
            _target: '𝟏',
          },
          {
            _source: '2',
            _target: '𝟐',
          },
          {
            _source: '3',
            _target: '𝟑',
          },
          {
            _source: '4',
            _target: '𝟒',
          },
          {
            _source: '5',
            _target: '𝟓',
          },
          {
            _source: '6',
            _target: '𝟔',
          },
          {
            _source: '7',
            _target: '𝟕',
          },
          {
            _source: '8',
            _target: '𝟖',
          },
          {
            _source: '9',
            _target: '𝟗',
          },
          {
            _source: '!',
            _target: '❗',
          },
          {
            _source: '?',
            _target: '❓',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'sans-bold-italic',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝒶',
          },
          {
            _source: 'b',
            _target: '𝒷',
          },
          {
            _source: 'c',
            _target: '𝒸',
          },
          {
            _source: 'd',
            _target: '𝒹',
          },
          {
            _source: 'e',
            _target: 'ℯ',
          },
          {
            _source: 'f',
            _target: '𝒻',
          },
          {
            _source: 'g',
            _target: 'ℊ',
          },
          {
            _source: 'h',
            _target: '𝒽',
          },
          {
            _source: 'i',
            _target: '𝒾',
          },
          {
            _source: 'j',
            _target: '𝒿',
          },
          {
            _source: 'k',
            _target: '𝓀',
          },
          {
            _source: 'l',
            _target: '𝓁',
          },
          {
            _source: 'm',
            _target: '𝓂',
          },
          {
            _source: 'n',
            _target: '𝓃',
          },
          {
            _source: 'o',
            _target: 'ℴ',
          },
          {
            _source: 'p',
            _target: '𝓅',
          },
          {
            _source: 'q',
            _target: '𝓆',
          },
          {
            _source: 'r',
            _target: '𝓇',
          },
          {
            _source: 's',
            _target: '𝓈',
          },
          {
            _source: 't',
            _target: '𝓉',
          },
          {
            _source: 'u',
            _target: '𝓊',
          },
          {
            _source: 'v',
            _target: '𝓋',
          },
          {
            _source: 'w',
            _target: '𝓌',
          },
          {
            _source: 'x',
            _target: '𝓍',
          },
          {
            _source: 'y',
            _target: '𝓎',
          },
          {
            _source: 'z',
            _target: '𝓏',
          },
          {
            _source: 'A',
            _target: '𝒜',
          },
          {
            _source: 'B',
            _target: 'ℬ',
          },
          {
            _source: 'C',
            _target: '𝒞',
          },
          {
            _source: 'D',
            _target: '𝒟',
          },
          {
            _source: 'E',
            _target: 'ℰ',
          },
          {
            _source: 'F',
            _target: 'ℱ',
          },
          {
            _source: 'G',
            _target: '𝒢',
          },
          {
            _source: 'H',
            _target: 'ℋ',
          },
          {
            _source: 'I',
            _target: 'ℐ',
          },
          {
            _source: 'J',
            _target: '𝒥',
          },
          {
            _source: 'K',
            _target: '𝒦',
          },
          {
            _source: 'L',
            _target: 'ℒ',
          },
          {
            _source: 'M',
            _target: 'ℳ',
          },
          {
            _source: 'N',
            _target: '𝒩',
          },
          {
            _source: 'O',
            _target: '𝒪',
          },
          {
            _source: 'P',
            _target: '𝒫',
          },
          {
            _source: 'Q',
            _target: '𝒬',
          },
          {
            _source: 'R',
            _target: 'ℛ',
          },
          {
            _source: 'S',
            _target: '𝒮',
          },
          {
            _source: 'T',
            _target: '𝒯',
          },
          {
            _source: 'U',
            _target: '𝒰',
          },
          {
            _source: 'V',
            _target: '𝒱',
          },
          {
            _source: 'W',
            _target: '𝒲',
          },
          {
            _source: 'X',
            _target: '𝒳',
          },
          {
            _source: 'Y',
            _target: '𝒴',
          },
          {
            _source: 'Z',
            _target: '𝒵',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'script',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝓪',
          },
          {
            _source: 'b',
            _target: '𝓫',
          },
          {
            _source: 'c',
            _target: '𝓬',
          },
          {
            _source: 'd',
            _target: '𝓭',
          },
          {
            _source: 'e',
            _target: '𝓮',
          },
          {
            _source: 'f',
            _target: '𝓯',
          },
          {
            _source: 'g',
            _target: '𝓰',
          },
          {
            _source: 'h',
            _target: '𝓱',
          },
          {
            _source: 'i',
            _target: '𝓲',
          },
          {
            _source: 'j',
            _target: '𝓳',
          },
          {
            _source: 'k',
            _target: '𝓴',
          },
          {
            _source: 'l',
            _target: '𝓵',
          },
          {
            _source: 'm',
            _target: '𝓶',
          },
          {
            _source: 'n',
            _target: '𝓷',
          },
          {
            _source: 'o',
            _target: '𝓸',
          },
          {
            _source: 'p',
            _target: '𝓹',
          },
          {
            _source: 'q',
            _target: '𝓺',
          },
          {
            _source: 'r',
            _target: '𝓻',
          },
          {
            _source: 's',
            _target: '𝓼',
          },
          {
            _source: 't',
            _target: '𝓽',
          },
          {
            _source: 'u',
            _target: '𝓾',
          },
          {
            _source: 'v',
            _target: '𝓿',
          },
          {
            _source: 'w',
            _target: '𝔀',
          },
          {
            _source: 'x',
            _target: '𝔁',
          },
          {
            _source: 'y',
            _target: '𝔂',
          },
          {
            _source: 'z',
            _target: '𝔃',
          },
          {
            _source: 'A',
            _target: '𝓐',
          },
          {
            _source: 'B',
            _target: '𝓑',
          },
          {
            _source: 'C',
            _target: '𝓒',
          },
          {
            _source: 'D',
            _target: '𝓓',
          },
          {
            _source: 'E',
            _target: '𝓔',
          },
          {
            _source: 'F',
            _target: '𝓕',
          },
          {
            _source: 'G',
            _target: '𝓖',
          },
          {
            _source: 'H',
            _target: '𝓗',
          },
          {
            _source: 'I',
            _target: '𝓘',
          },
          {
            _source: 'J',
            _target: '𝓙',
          },
          {
            _source: 'K',
            _target: '𝓚',
          },
          {
            _source: 'L',
            _target: '𝓛',
          },
          {
            _source: 'M',
            _target: '𝓜',
          },
          {
            _source: 'N',
            _target: '𝓝',
          },
          {
            _source: 'O',
            _target: '𝓞',
          },
          {
            _source: 'P',
            _target: '𝓟',
          },
          {
            _source: 'Q',
            _target: '𝓠',
          },
          {
            _source: 'R',
            _target: '𝓡',
          },
          {
            _source: 'S',
            _target: '𝓢',
          },
          {
            _source: 'T',
            _target: '𝓣',
          },
          {
            _source: 'U',
            _target: '𝓤',
          },
          {
            _source: 'V',
            _target: '𝓥',
          },
          {
            _source: 'W',
            _target: '𝓦',
          },
          {
            _source: 'X',
            _target: '𝓧',
          },
          {
            _source: 'Y',
            _target: '𝓨',
          },
          {
            _source: 'Z',
            _target: '𝓩',
          },
          {
            _source: '0',
            _target: '𝟎',
          },
          {
            _source: '1',
            _target: '𝟏',
          },
          {
            _source: '2',
            _target: '𝟐',
          },
          {
            _source: '3',
            _target: '𝟑',
          },
          {
            _source: '4',
            _target: '𝟒',
          },
          {
            _source: '5',
            _target: '𝟓',
          },
          {
            _source: '6',
            _target: '𝟔',
          },
          {
            _source: '7',
            _target: '𝟕',
          },
          {
            _source: '8',
            _target: '𝟖',
          },
          {
            _source: '9',
            _target: '𝟗',
          },
          {
            _source: '!',
            _target: '❗',
          },
          {
            _source: '?',
            _target: '❓',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'script-bold',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝔞',
          },
          {
            _source: 'b',
            _target: '𝔟',
          },
          {
            _source: 'c',
            _target: '𝔠',
          },
          {
            _source: 'd',
            _target: '𝔡',
          },
          {
            _source: 'e',
            _target: '𝔢',
          },
          {
            _source: 'f',
            _target: '𝔣',
          },
          {
            _source: 'g',
            _target: '𝔤',
          },
          {
            _source: 'h',
            _target: '𝔥',
          },
          {
            _source: 'i',
            _target: '𝔦',
          },
          {
            _source: 'j',
            _target: '𝔧',
          },
          {
            _source: 'k',
            _target: '𝔨',
          },
          {
            _source: 'l',
            _target: '𝔩',
          },
          {
            _source: 'm',
            _target: '𝔪',
          },
          {
            _source: 'n',
            _target: '𝔫',
          },
          {
            _source: 'o',
            _target: '𝔬',
          },
          {
            _source: 'p',
            _target: '𝔭',
          },
          {
            _source: 'q',
            _target: '𝔮',
          },
          {
            _source: 'r',
            _target: '𝔯',
          },
          {
            _source: 's',
            _target: '𝔰',
          },
          {
            _source: 't',
            _target: '𝔱',
          },
          {
            _source: 'u',
            _target: '𝔲',
          },
          {
            _source: 'v',
            _target: '𝔳',
          },
          {
            _source: 'w',
            _target: '𝔴',
          },
          {
            _source: 'x',
            _target: '𝔵',
          },
          {
            _source: 'y',
            _target: '𝔶',
          },
          {
            _source: 'z',
            _target: '𝔷',
          },
          {
            _source: 'A',
            _target: '𝔄',
          },
          {
            _source: 'B',
            _target: '𝔅',
          },
          {
            _source: 'C',
            _target: 'ℭ',
          },
          {
            _source: 'D',
            _target: '𝔇',
          },
          {
            _source: 'E',
            _target: '𝔈',
          },
          {
            _source: 'F',
            _target: '𝔉',
          },
          {
            _source: 'G',
            _target: '𝔊',
          },
          {
            _source: 'H',
            _target: 'ℌ',
          },
          {
            _source: 'I',
            _target: 'ℑ',
          },
          {
            _source: 'J',
            _target: '𝔍',
          },
          {
            _source: 'K',
            _target: '𝔎',
          },
          {
            _source: 'L',
            _target: '𝔏',
          },
          {
            _source: 'M',
            _target: '𝔐',
          },
          {
            _source: 'N',
            _target: '𝔑',
          },
          {
            _source: 'O',
            _target: '𝔒',
          },
          {
            _source: 'P',
            _target: '𝔓',
          },
          {
            _source: 'Q',
            _target: '𝔔',
          },
          {
            _source: 'R',
            _target: 'ℜ',
          },
          {
            _source: 'S',
            _target: '𝔖',
          },
          {
            _source: 'T',
            _target: '𝔗',
          },
          {
            _source: 'U',
            _target: '𝔘',
          },
          {
            _source: 'V',
            _target: '𝔙',
          },
          {
            _source: 'W',
            _target: '𝔚',
          },
          {
            _source: 'X',
            _target: '𝔛',
          },
          {
            _source: 'Y',
            _target: '𝔜',
          },
          {
            _source: 'Z',
            _target: 'ℨ',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'fraktur',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝖆',
          },
          {
            _source: 'b',
            _target: '𝖇',
          },
          {
            _source: 'c',
            _target: '𝖈',
          },
          {
            _source: 'd',
            _target: '𝖉',
          },
          {
            _source: 'e',
            _target: '𝖊',
          },
          {
            _source: 'f',
            _target: '𝖋',
          },
          {
            _source: 'g',
            _target: '𝖌',
          },
          {
            _source: 'h',
            _target: '𝖍',
          },
          {
            _source: 'i',
            _target: '𝖎',
          },
          {
            _source: 'j',
            _target: '𝖏',
          },
          {
            _source: 'k',
            _target: '𝖐',
          },
          {
            _source: 'l',
            _target: '𝖑',
          },
          {
            _source: 'm',
            _target: '𝖒',
          },
          {
            _source: 'n',
            _target: '𝖓',
          },
          {
            _source: 'o',
            _target: '𝖔',
          },
          {
            _source: 'p',
            _target: '𝖕',
          },
          {
            _source: 'q',
            _target: '𝖖',
          },
          {
            _source: 'r',
            _target: '𝖗',
          },
          {
            _source: 's',
            _target: '𝖘',
          },
          {
            _source: 't',
            _target: '𝖙',
          },
          {
            _source: 'u',
            _target: '𝖚',
          },
          {
            _source: 'v',
            _target: '𝖛',
          },
          {
            _source: 'w',
            _target: '𝖜',
          },
          {
            _source: 'x',
            _target: '𝖝',
          },
          {
            _source: 'y',
            _target: '𝖞',
          },
          {
            _source: 'z',
            _target: '𝖟',
          },
          {
            _source: 'A',
            _target: '𝕬',
          },
          {
            _source: 'B',
            _target: '𝕭',
          },
          {
            _source: 'C',
            _target: '𝕮',
          },
          {
            _source: 'D',
            _target: '𝕯',
          },
          {
            _source: 'E',
            _target: '𝕰',
          },
          {
            _source: 'F',
            _target: '𝕱',
          },
          {
            _source: 'G',
            _target: '𝕲',
          },
          {
            _source: 'H',
            _target: '𝕳',
          },
          {
            _source: 'I',
            _target: '𝕴',
          },
          {
            _source: 'J',
            _target: '𝕵',
          },
          {
            _source: 'K',
            _target: '𝕶',
          },
          {
            _source: 'L',
            _target: '𝕷',
          },
          {
            _source: 'M',
            _target: '𝕸',
          },
          {
            _source: 'N',
            _target: '𝕹',
          },
          {
            _source: 'O',
            _target: '𝕺',
          },
          {
            _source: 'P',
            _target: '𝕻',
          },
          {
            _source: 'Q',
            _target: '𝕼',
          },
          {
            _source: 'R',
            _target: '𝕽',
          },
          {
            _source: 'S',
            _target: '𝕾',
          },
          {
            _source: 'T',
            _target: '𝕿',
          },
          {
            _source: 'U',
            _target: '𝖀',
          },
          {
            _source: 'V',
            _target: '𝖁',
          },
          {
            _source: 'W',
            _target: '𝖂',
          },
          {
            _source: 'X',
            _target: '𝖃',
          },
          {
            _source: 'Y',
            _target: '𝖄',
          },
          {
            _source: 'Z',
            _target: '𝖅',
          },
          {
            _source: '0',
            _target: '𝟎',
          },
          {
            _source: '1',
            _target: '𝟏',
          },
          {
            _source: '2',
            _target: '𝟐',
          },
          {
            _source: '3',
            _target: '𝟑',
          },
          {
            _source: '4',
            _target: '𝟒',
          },
          {
            _source: '5',
            _target: '𝟓',
          },
          {
            _source: '6',
            _target: '𝟔',
          },
          {
            _source: '7',
            _target: '𝟕',
          },
          {
            _source: '8',
            _target: '𝟖',
          },
          {
            _source: '9',
            _target: '𝟗',
          },
          {
            _source: '!',
            _target: '❗',
          },
          {
            _source: '?',
            _target: '❓',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'fraktur-bold',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝚊',
          },
          {
            _source: 'b',
            _target: '𝚋',
          },
          {
            _source: 'c',
            _target: '𝚌',
          },
          {
            _source: 'd',
            _target: '𝚍',
          },
          {
            _source: 'e',
            _target: '𝚎',
          },
          {
            _source: 'f',
            _target: '𝚏',
          },
          {
            _source: 'g',
            _target: '𝚐',
          },
          {
            _source: 'h',
            _target: '𝚑',
          },
          {
            _source: 'i',
            _target: '𝚒',
          },
          {
            _source: 'j',
            _target: '𝚓',
          },
          {
            _source: 'k',
            _target: '𝚔',
          },
          {
            _source: 'l',
            _target: '𝚕',
          },
          {
            _source: 'm',
            _target: '𝚖',
          },
          {
            _source: 'n',
            _target: '𝚗',
          },
          {
            _source: 'o',
            _target: '𝚘',
          },
          {
            _source: 'p',
            _target: '𝚙',
          },
          {
            _source: 'q',
            _target: '𝚚',
          },
          {
            _source: 'r',
            _target: '𝚛',
          },
          {
            _source: 's',
            _target: '𝚜',
          },
          {
            _source: 't',
            _target: '𝚝',
          },
          {
            _source: 'u',
            _target: '𝚞',
          },
          {
            _source: 'v',
            _target: '𝚟',
          },
          {
            _source: 'w',
            _target: '𝚠',
          },
          {
            _source: 'x',
            _target: '𝚡',
          },
          {
            _source: 'y',
            _target: '𝚢',
          },
          {
            _source: 'z',
            _target: '𝚣',
          },
          {
            _source: 'A',
            _target: '𝙰',
          },
          {
            _source: 'B',
            _target: '𝙱',
          },
          {
            _source: 'C',
            _target: '𝙲',
          },
          {
            _source: 'D',
            _target: '𝙳',
          },
          {
            _source: 'E',
            _target: '𝙴',
          },
          {
            _source: 'F',
            _target: '𝙵',
          },
          {
            _source: 'G',
            _target: '𝙶',
          },
          {
            _source: 'H',
            _target: '𝙷',
          },
          {
            _source: 'I',
            _target: '𝙸',
          },
          {
            _source: 'J',
            _target: '𝙹',
          },
          {
            _source: 'K',
            _target: '𝙺',
          },
          {
            _source: 'L',
            _target: '𝙻',
          },
          {
            _source: 'M',
            _target: '𝙼',
          },
          {
            _source: 'N',
            _target: '𝙽',
          },
          {
            _source: 'O',
            _target: '𝙾',
          },
          {
            _source: 'P',
            _target: '𝙿',
          },
          {
            _source: 'Q',
            _target: '𝚀',
          },
          {
            _source: 'R',
            _target: '𝚁',
          },
          {
            _source: 'S',
            _target: '𝚂',
          },
          {
            _source: 'T',
            _target: '𝚃',
          },
          {
            _source: 'U',
            _target: '𝚄',
          },
          {
            _source: 'V',
            _target: '𝚅',
          },
          {
            _source: 'W',
            _target: '𝚆',
          },
          {
            _source: 'X',
            _target: '𝚇',
          },
          {
            _source: 'Y',
            _target: '𝚈',
          },
          {
            _source: 'Z',
            _target: '𝚉',
          },
          {
            _source: '0',
            _target: '𝟶',
          },
          {
            _source: '1',
            _target: '𝟷',
          },
          {
            _source: '2',
            _target: '𝟸',
          },
          {
            _source: '3',
            _target: '𝟹',
          },
          {
            _source: '4',
            _target: '𝟺',
          },
          {
            _source: '5',
            _target: '𝟻',
          },
          {
            _source: '6',
            _target: '𝟼',
          },
          {
            _source: '7',
            _target: '𝟽',
          },
          {
            _source: '8',
            _target: '𝟾',
          },
          {
            _source: '9',
            _target: '𝟿',
          },
          {
            _source: '!',
            _target: '！',
          },
          {
            _source: '?',
            _target: '？',
          },
          {
            _source: '.',
            _target: '．',
          },
          {
            _source: ',',
            _target: '，',
          },
          {
            _source: '"',
            _target: '＂',
          },
          {
            _source: "'",
            _target: '＇',
          },
        ],
        _name: 'monospace',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'ａ',
          },
          {
            _source: 'b',
            _target: 'ｂ',
          },
          {
            _source: 'c',
            _target: 'ｃ',
          },
          {
            _source: 'd',
            _target: 'ｄ',
          },
          {
            _source: 'e',
            _target: 'ｅ',
          },
          {
            _source: 'f',
            _target: 'ｆ',
          },
          {
            _source: 'g',
            _target: 'ｇ',
          },
          {
            _source: 'h',
            _target: 'ｈ',
          },
          {
            _source: 'i',
            _target: 'ｉ',
          },
          {
            _source: 'j',
            _target: 'ｊ',
          },
          {
            _source: 'k',
            _target: 'ｋ',
          },
          {
            _source: 'l',
            _target: 'ｌ',
          },
          {
            _source: 'm',
            _target: 'ｍ',
          },
          {
            _source: 'n',
            _target: 'ｎ',
          },
          {
            _source: 'o',
            _target: 'ｏ',
          },
          {
            _source: 'p',
            _target: 'ｐ',
          },
          {
            _source: 'q',
            _target: 'ｑ',
          },
          {
            _source: 'r',
            _target: 'ｒ',
          },
          {
            _source: 's',
            _target: 'ｓ',
          },
          {
            _source: 't',
            _target: 'ｔ',
          },
          {
            _source: 'u',
            _target: 'ｕ',
          },
          {
            _source: 'v',
            _target: 'ｖ',
          },
          {
            _source: 'w',
            _target: 'ｗ',
          },
          {
            _source: 'x',
            _target: 'ｘ',
          },
          {
            _source: 'y',
            _target: 'ｙ',
          },
          {
            _source: 'z',
            _target: 'ｚ',
          },
          {
            _source: 'A',
            _target: 'Ａ',
          },
          {
            _source: 'B',
            _target: 'Ｂ',
          },
          {
            _source: 'C',
            _target: 'Ｃ',
          },
          {
            _source: 'D',
            _target: 'Ｄ',
          },
          {
            _source: 'E',
            _target: 'Ｅ',
          },
          {
            _source: 'F',
            _target: 'Ｆ',
          },
          {
            _source: 'G',
            _target: 'Ｇ',
          },
          {
            _source: 'H',
            _target: 'Ｈ',
          },
          {
            _source: 'I',
            _target: 'Ｉ',
          },
          {
            _source: 'J',
            _target: 'Ｊ',
          },
          {
            _source: 'K',
            _target: 'Ｋ',
          },
          {
            _source: 'L',
            _target: 'Ｌ',
          },
          {
            _source: 'M',
            _target: 'Ｍ',
          },
          {
            _source: 'N',
            _target: 'Ｎ',
          },
          {
            _source: 'O',
            _target: 'Ｏ',
          },
          {
            _source: 'P',
            _target: 'Ｐ',
          },
          {
            _source: 'Q',
            _target: 'Ｑ',
          },
          {
            _source: 'R',
            _target: 'Ｒ',
          },
          {
            _source: 'S',
            _target: 'Ｓ',
          },
          {
            _source: 'T',
            _target: 'Ｔ',
          },
          {
            _source: 'U',
            _target: 'Ｕ',
          },
          {
            _source: 'V',
            _target: 'Ｖ',
          },
          {
            _source: 'W',
            _target: 'Ｗ',
          },
          {
            _source: 'X',
            _target: 'Ｘ',
          },
          {
            _source: 'Y',
            _target: 'Ｙ',
          },
          {
            _source: 'Z',
            _target: 'Ｚ',
          },
          {
            _source: '0',
            _target: '０',
          },
          {
            _source: '1',
            _target: '１',
          },
          {
            _source: '2',
            _target: '２',
          },
          {
            _source: '3',
            _target: '３',
          },
          {
            _source: '4',
            _target: '４',
          },
          {
            _source: '5',
            _target: '５',
          },
          {
            _source: '6',
            _target: '６',
          },
          {
            _source: '7',
            _target: '７',
          },
          {
            _source: '8',
            _target: '８',
          },
          {
            _source: '9',
            _target: '９',
          },
          {
            _source: '!',
            _target: '！',
          },
          {
            _source: '?',
            _target: '？',
          },
          {
            _source: '.',
            _target: '．',
          },
          {
            _source: ',',
            _target: '，',
          },
          {
            _source: '"',
            _target: '＂',
          },
          {
            _source: "'",
            _target: '＇',
          },
        ],
        _name: 'fullwidth',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '𝕒',
          },
          {
            _source: 'b',
            _target: '𝕓',
          },
          {
            _source: 'c',
            _target: '𝕔',
          },
          {
            _source: 'd',
            _target: '𝕕',
          },
          {
            _source: 'e',
            _target: '𝕖',
          },
          {
            _source: 'f',
            _target: '𝕗',
          },
          {
            _source: 'g',
            _target: '𝕘',
          },
          {
            _source: 'h',
            _target: '𝕙',
          },
          {
            _source: 'i',
            _target: '𝕚',
          },
          {
            _source: 'j',
            _target: '𝕛',
          },
          {
            _source: 'k',
            _target: '𝕜',
          },
          {
            _source: 'l',
            _target: '𝕝',
          },
          {
            _source: 'm',
            _target: '𝕞',
          },
          {
            _source: 'n',
            _target: '𝕟',
          },
          {
            _source: 'o',
            _target: '𝕠',
          },
          {
            _source: 'p',
            _target: '𝕡',
          },
          {
            _source: 'q',
            _target: '𝕢',
          },
          {
            _source: 'r',
            _target: '𝕣',
          },
          {
            _source: 's',
            _target: '𝕤',
          },
          {
            _source: 't',
            _target: '𝕥',
          },
          {
            _source: 'u',
            _target: '𝕦',
          },
          {
            _source: 'v',
            _target: '𝕧',
          },
          {
            _source: 'w',
            _target: '𝕨',
          },
          {
            _source: 'x',
            _target: '𝕩',
          },
          {
            _source: 'y',
            _target: '𝕪',
          },
          {
            _source: 'z',
            _target: '𝕫',
          },
          {
            _source: 'A',
            _target: '𝔸',
          },
          {
            _source: 'B',
            _target: '𝔹',
          },
          {
            _source: 'C',
            _target: 'ℂ',
          },
          {
            _source: 'D',
            _target: '𝔻',
          },
          {
            _source: 'E',
            _target: '𝔼',
          },
          {
            _source: 'F',
            _target: '𝔽',
          },
          {
            _source: 'G',
            _target: '𝔾',
          },
          {
            _source: 'H',
            _target: 'ℍ',
          },
          {
            _source: 'I',
            _target: '𝕀',
          },
          {
            _source: 'J',
            _target: '𝕁',
          },
          {
            _source: 'K',
            _target: '𝕂',
          },
          {
            _source: 'L',
            _target: '𝕃',
          },
          {
            _source: 'M',
            _target: '𝕄',
          },
          {
            _source: 'N',
            _target: 'ℕ',
          },
          {
            _source: 'O',
            _target: '𝕆',
          },
          {
            _source: 'P',
            _target: 'ℙ',
          },
          {
            _source: 'Q',
            _target: 'ℚ',
          },
          {
            _source: 'R',
            _target: 'ℝ',
          },
          {
            _source: 'S',
            _target: '𝕊',
          },
          {
            _source: 'T',
            _target: '𝕋',
          },
          {
            _source: 'U',
            _target: '𝕌',
          },
          {
            _source: 'V',
            _target: '𝕍',
          },
          {
            _source: 'W',
            _target: '𝕎',
          },
          {
            _source: 'X',
            _target: '𝕏',
          },
          {
            _source: 'Y',
            _target: '𝕐',
          },
          {
            _source: 'Z',
            _target: 'ℤ',
          },
          {
            _source: '0',
            _target: '𝟘',
          },
          {
            _source: '1',
            _target: '𝟙',
          },
          {
            _source: '2',
            _target: '𝟚',
          },
          {
            _source: '3',
            _target: '𝟛',
          },
          {
            _source: '4',
            _target: '𝟜',
          },
          {
            _source: '5',
            _target: '𝟝',
          },
          {
            _source: '6',
            _target: '𝟞',
          },
          {
            _source: '7',
            _target: '𝟟',
          },
          {
            _source: '8',
            _target: '𝟠',
          },
          {
            _source: '9',
            _target: '𝟡',
          },
          {
            _source: '!',
            _target: '❕',
          },
          {
            _source: '?',
            _target: '❔',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'doublestruck',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'ᴀ',
          },
          {
            _source: 'b',
            _target: 'ʙ',
          },
          {
            _source: 'c',
            _target: 'ᴄ',
          },
          {
            _source: 'd',
            _target: 'ᴅ',
          },
          {
            _source: 'e',
            _target: 'ᴇ',
          },
          {
            _source: 'f',
            _target: 'ꜰ',
          },
          {
            _source: 'g',
            _target: 'ɢ',
          },
          {
            _source: 'h',
            _target: 'ʜ',
          },
          {
            _source: 'i',
            _target: 'ɪ',
          },
          {
            _source: 'j',
            _target: 'ᴊ',
          },
          {
            _source: 'k',
            _target: 'ᴋ',
          },
          {
            _source: 'l',
            _target: 'ʟ',
          },
          {
            _source: 'm',
            _target: 'ᴍ',
          },
          {
            _source: 'n',
            _target: 'ɴ',
          },
          {
            _source: 'o',
            _target: 'ᴏ',
          },
          {
            _source: 'p',
            _target: 'ᴘ',
          },
          {
            _source: 'q',
            _target: 'q',
          },
          {
            _source: 'r',
            _target: 'ʀ',
          },
          {
            _source: 's',
            _target: 'ꜱ',
          },
          {
            _source: 't',
            _target: 'ᴛ',
          },
          {
            _source: 'u',
            _target: 'ᴜ',
          },
          {
            _source: 'v',
            _target: 'ᴠ',
          },
          {
            _source: 'w',
            _target: 'ᴡ',
          },
          {
            _source: 'x',
            _target: 'x',
          },
          {
            _source: 'y',
            _target: 'ʏ',
          },
          {
            _source: 'z',
            _target: 'ᴢ',
          },
          {
            _source: 'A',
            _target: 'A',
          },
          {
            _source: 'B',
            _target: 'B',
          },
          {
            _source: 'C',
            _target: 'C',
          },
          {
            _source: 'D',
            _target: 'D',
          },
          {
            _source: 'E',
            _target: 'E',
          },
          {
            _source: 'F',
            _target: 'F',
          },
          {
            _source: 'G',
            _target: 'G',
          },
          {
            _source: 'H',
            _target: 'H',
          },
          {
            _source: 'I',
            _target: 'I',
          },
          {
            _source: 'J',
            _target: 'J',
          },
          {
            _source: 'K',
            _target: 'K',
          },
          {
            _source: 'L',
            _target: 'L',
          },
          {
            _source: 'M',
            _target: 'M',
          },
          {
            _source: 'N',
            _target: 'N',
          },
          {
            _source: 'O',
            _target: 'O',
          },
          {
            _source: 'P',
            _target: 'P',
          },
          {
            _source: 'Q',
            _target: 'Q',
          },
          {
            _source: 'R',
            _target: 'R',
          },
          {
            _source: 'S',
            _target: 'S',
          },
          {
            _source: 'T',
            _target: 'T',
          },
          {
            _source: 'U',
            _target: 'U',
          },
          {
            _source: 'V',
            _target: 'V',
          },
          {
            _source: 'W',
            _target: 'W',
          },
          {
            _source: 'X',
            _target: 'X',
          },
          {
            _source: 'Y',
            _target: 'Y',
          },
          {
            _source: 'Z',
            _target: 'Z',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '﹗',
          },
          {
            _source: '?',
            _target: '﹖',
          },
          {
            _source: '.',
            _target: '﹒',
          },
          {
            _source: ',',
            _target: '﹐',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'capitalized',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'ⓐ',
          },
          {
            _source: 'b',
            _target: 'ⓑ',
          },
          {
            _source: 'c',
            _target: 'ⓒ',
          },
          {
            _source: 'd',
            _target: 'ⓓ',
          },
          {
            _source: 'e',
            _target: 'ⓔ',
          },
          {
            _source: 'f',
            _target: 'ⓕ',
          },
          {
            _source: 'g',
            _target: 'ⓖ',
          },
          {
            _source: 'h',
            _target: 'ⓗ',
          },
          {
            _source: 'i',
            _target: 'ⓘ',
          },
          {
            _source: 'j',
            _target: 'ⓙ',
          },
          {
            _source: 'k',
            _target: 'ⓚ',
          },
          {
            _source: 'l',
            _target: 'ⓛ',
          },
          {
            _source: 'm',
            _target: 'ⓜ',
          },
          {
            _source: 'n',
            _target: 'ⓝ',
          },
          {
            _source: 'o',
            _target: 'ⓞ',
          },
          {
            _source: 'p',
            _target: 'ⓟ',
          },
          {
            _source: 'q',
            _target: 'ⓠ',
          },
          {
            _source: 'r',
            _target: 'ⓡ',
          },
          {
            _source: 's',
            _target: 'ⓢ',
          },
          {
            _source: 't',
            _target: 'ⓣ',
          },
          {
            _source: 'u',
            _target: 'ⓤ',
          },
          {
            _source: 'v',
            _target: 'ⓥ',
          },
          {
            _source: 'w',
            _target: 'ⓦ',
          },
          {
            _source: 'x',
            _target: 'ⓧ',
          },
          {
            _source: 'y',
            _target: 'ⓨ',
          },
          {
            _source: 'z',
            _target: 'ⓩ',
          },
          {
            _source: 'A',
            _target: 'Ⓐ',
          },
          {
            _source: 'B',
            _target: 'Ⓑ',
          },
          {
            _source: 'C',
            _target: 'Ⓒ',
          },
          {
            _source: 'D',
            _target: 'Ⓓ',
          },
          {
            _source: 'E',
            _target: 'Ⓔ',
          },
          {
            _source: 'F',
            _target: 'Ⓕ',
          },
          {
            _source: 'G',
            _target: 'Ⓖ',
          },
          {
            _source: 'H',
            _target: 'Ⓗ',
          },
          {
            _source: 'I',
            _target: 'Ⓘ',
          },
          {
            _source: 'J',
            _target: 'Ⓙ',
          },
          {
            _source: 'K',
            _target: 'Ⓚ',
          },
          {
            _source: 'L',
            _target: 'Ⓛ',
          },
          {
            _source: 'M',
            _target: 'Ⓜ',
          },
          {
            _source: 'N',
            _target: 'Ⓝ',
          },
          {
            _source: 'O',
            _target: 'Ⓞ',
          },
          {
            _source: 'P',
            _target: 'Ⓟ',
          },
          {
            _source: 'Q',
            _target: 'Ⓠ',
          },
          {
            _source: 'R',
            _target: 'Ⓡ',
          },
          {
            _source: 'S',
            _target: 'Ⓢ',
          },
          {
            _source: 'T',
            _target: 'Ⓣ',
          },
          {
            _source: 'U',
            _target: 'Ⓤ',
          },
          {
            _source: 'V',
            _target: 'Ⓥ',
          },
          {
            _source: 'W',
            _target: 'Ⓦ',
          },
          {
            _source: 'X',
            _target: 'Ⓧ',
          },
          {
            _source: 'Y',
            _target: 'Ⓨ',
          },
          {
            _source: 'Z',
            _target: 'Ⓩ',
          },
          {
            _source: '0',
            _target: '⓪',
          },
          {
            _source: '1',
            _target: '①',
          },
          {
            _source: '2',
            _target: '②',
          },
          {
            _source: '3',
            _target: '③',
          },
          {
            _source: '4',
            _target: '④',
          },
          {
            _source: '5',
            _target: '⑤',
          },
          {
            _source: '6',
            _target: '⑥',
          },
          {
            _source: '7',
            _target: '⑦',
          },
          {
            _source: '8',
            _target: '⑧',
          },
          {
            _source: '9',
            _target: '⑨',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'circled',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: '⒜',
          },
          {
            _source: 'b',
            _target: '⒝',
          },
          {
            _source: 'c',
            _target: '⒞',
          },
          {
            _source: 'd',
            _target: '⒟',
          },
          {
            _source: 'e',
            _target: '⒠',
          },
          {
            _source: 'f',
            _target: '⒡',
          },
          {
            _source: 'g',
            _target: '⒢',
          },
          {
            _source: 'h',
            _target: '⒣',
          },
          {
            _source: 'i',
            _target: '⒤',
          },
          {
            _source: 'j',
            _target: '⒥',
          },
          {
            _source: 'k',
            _target: '⒦',
          },
          {
            _source: 'l',
            _target: '⒧',
          },
          {
            _source: 'm',
            _target: '⒨',
          },
          {
            _source: 'n',
            _target: '⒩',
          },
          {
            _source: 'o',
            _target: '⒪',
          },
          {
            _source: 'p',
            _target: '⒫',
          },
          {
            _source: 'q',
            _target: '⒬',
          },
          {
            _source: 'r',
            _target: '⒭',
          },
          {
            _source: 's',
            _target: '⒮',
          },
          {
            _source: 't',
            _target: '⒯',
          },
          {
            _source: 'u',
            _target: '⒰',
          },
          {
            _source: 'v',
            _target: '⒱',
          },
          {
            _source: 'w',
            _target: '⒲',
          },
          {
            _source: 'x',
            _target: '⒳',
          },
          {
            _source: 'y',
            _target: '⒴',
          },
          {
            _source: 'z',
            _target: '⒵',
          },
          {
            _source: 'A',
            _target: '🄐',
          },
          {
            _source: 'B',
            _target: '🄑',
          },
          {
            _source: 'C',
            _target: '🄒',
          },
          {
            _source: 'D',
            _target: '🄓',
          },
          {
            _source: 'E',
            _target: '🄔',
          },
          {
            _source: 'F',
            _target: '🄕',
          },
          {
            _source: 'G',
            _target: '🄖',
          },
          {
            _source: 'H',
            _target: '🄗',
          },
          {
            _source: 'I',
            _target: '🄘',
          },
          {
            _source: 'J',
            _target: '🄙',
          },
          {
            _source: 'K',
            _target: '🄚',
          },
          {
            _source: 'L',
            _target: '🄛',
          },
          {
            _source: 'M',
            _target: '🄜',
          },
          {
            _source: 'N',
            _target: '🄝',
          },
          {
            _source: 'O',
            _target: '🄞',
          },
          {
            _source: 'P',
            _target: '🄟',
          },
          {
            _source: 'Q',
            _target: '🄠',
          },
          {
            _source: 'R',
            _target: '🄡',
          },
          {
            _source: 'S',
            _target: '🄢',
          },
          {
            _source: 'T',
            _target: '🄣',
          },
          {
            _source: 'U',
            _target: '🄤',
          },
          {
            _source: 'V',
            _target: '🄥',
          },
          {
            _source: 'W',
            _target: '🄦',
          },
          {
            _source: 'X',
            _target: '🄧',
          },
          {
            _source: 'Y',
            _target: '🄨',
          },
          {
            _source: 'Z',
            _target: '🄩',
          },
          {
            _source: '0',
            _target: '⓿',
          },
          {
            _source: '1',
            _target: '⑴',
          },
          {
            _source: '2',
            _target: '⑵',
          },
          {
            _source: '3',
            _target: '⑶',
          },
          {
            _source: '4',
            _target: '⑷',
          },
          {
            _source: '5',
            _target: '⑸',
          },
          {
            _source: '6',
            _target: '⑹',
          },
          {
            _source: '7',
            _target: '⑺',
          },
          {
            _source: '8',
            _target: '⑻',
          },
          {
            _source: '9',
            _target: '⑼',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'parenthesized',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'a',
          },
          {
            _source: 'b',
            _target: 'b',
          },
          {
            _source: 'c',
            _target: 'c',
          },
          {
            _source: 'd',
            _target: 'd',
          },
          {
            _source: 'e',
            _target: 'e',
          },
          {
            _source: 'f',
            _target: 'f',
          },
          {
            _source: 'g',
            _target: 'g',
          },
          {
            _source: 'h',
            _target: 'h',
          },
          {
            _source: 'i',
            _target: 'i',
          },
          {
            _source: 'j',
            _target: 'j',
          },
          {
            _source: 'k',
            _target: 'k',
          },
          {
            _source: 'l',
            _target: 'l',
          },
          {
            _source: 'm',
            _target: 'm',
          },
          {
            _source: 'n',
            _target: 'n',
          },
          {
            _source: 'o',
            _target: 'o',
          },
          {
            _source: 'p',
            _target: 'p',
          },
          {
            _source: 'q',
            _target: 'q',
          },
          {
            _source: 'r',
            _target: 'r',
          },
          {
            _source: 's',
            _target: 's',
          },
          {
            _source: 't',
            _target: 't',
          },
          {
            _source: 'u',
            _target: 'u',
          },
          {
            _source: 'v',
            _target: 'v',
          },
          {
            _source: 'w',
            _target: 'w',
          },
          {
            _source: 'x',
            _target: 'x',
          },
          {
            _source: 'y',
            _target: 'y',
          },
          {
            _source: 'z',
            _target: 'z',
          },
          {
            _source: 'A',
            _target: 'A',
          },
          {
            _source: 'B',
            _target: 'B',
          },
          {
            _source: 'C',
            _target: 'C',
          },
          {
            _source: 'D',
            _target: 'D',
          },
          {
            _source: 'E',
            _target: 'E',
          },
          {
            _source: 'F',
            _target: 'F',
          },
          {
            _source: 'G',
            _target: 'G',
          },
          {
            _source: 'H',
            _target: 'H',
          },
          {
            _source: 'I',
            _target: 'I',
          },
          {
            _source: 'J',
            _target: 'J',
          },
          {
            _source: 'K',
            _target: 'K',
          },
          {
            _source: 'L',
            _target: 'L',
          },
          {
            _source: 'M',
            _target: 'M',
          },
          {
            _source: 'N',
            _target: 'N',
          },
          {
            _source: 'O',
            _target: 'O',
          },
          {
            _source: 'P',
            _target: 'P',
          },
          {
            _source: 'Q',
            _target: 'Q',
          },
          {
            _source: 'R',
            _target: 'R',
          },
          {
            _source: 'S',
            _target: 'S',
          },
          {
            _source: 'T',
            _target: 'T',
          },
          {
            _source: 'U',
            _target: 'U',
          },
          {
            _source: 'V',
            _target: 'V',
          },
          {
            _source: 'W',
            _target: 'W',
          },
          {
            _source: 'X',
            _target: 'X',
          },
          {
            _source: 'Y',
            _target: 'Y',
          },
          {
            _source: 'Z',
            _target: 'Z',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'underlined-single',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'a',
          },
          {
            _source: 'b',
            _target: 'b',
          },
          {
            _source: 'c',
            _target: 'c',
          },
          {
            _source: 'd',
            _target: 'd',
          },
          {
            _source: 'e',
            _target: 'e',
          },
          {
            _source: 'f',
            _target: 'f',
          },
          {
            _source: 'g',
            _target: 'g',
          },
          {
            _source: 'h',
            _target: 'h',
          },
          {
            _source: 'i',
            _target: 'i',
          },
          {
            _source: 'j',
            _target: 'j',
          },
          {
            _source: 'k',
            _target: 'k',
          },
          {
            _source: 'l',
            _target: 'l',
          },
          {
            _source: 'm',
            _target: 'm',
          },
          {
            _source: 'n',
            _target: 'n',
          },
          {
            _source: 'o',
            _target: 'o',
          },
          {
            _source: 'p',
            _target: 'p',
          },
          {
            _source: 'q',
            _target: 'q',
          },
          {
            _source: 'r',
            _target: 'r',
          },
          {
            _source: 's',
            _target: 's',
          },
          {
            _source: 't',
            _target: 't',
          },
          {
            _source: 'u',
            _target: 'u',
          },
          {
            _source: 'v',
            _target: 'v',
          },
          {
            _source: 'w',
            _target: 'w',
          },
          {
            _source: 'x',
            _target: 'x',
          },
          {
            _source: 'y',
            _target: 'y',
          },
          {
            _source: 'z',
            _target: 'z',
          },
          {
            _source: 'A',
            _target: 'A',
          },
          {
            _source: 'B',
            _target: 'B',
          },
          {
            _source: 'C',
            _target: 'C',
          },
          {
            _source: 'D',
            _target: 'D',
          },
          {
            _source: 'E',
            _target: 'E',
          },
          {
            _source: 'F',
            _target: 'F',
          },
          {
            _source: 'G',
            _target: 'G',
          },
          {
            _source: 'H',
            _target: 'H',
          },
          {
            _source: 'I',
            _target: 'I',
          },
          {
            _source: 'J',
            _target: 'J',
          },
          {
            _source: 'K',
            _target: 'K',
          },
          {
            _source: 'L',
            _target: 'L',
          },
          {
            _source: 'M',
            _target: 'M',
          },
          {
            _source: 'N',
            _target: 'N',
          },
          {
            _source: 'O',
            _target: 'O',
          },
          {
            _source: 'P',
            _target: 'P',
          },
          {
            _source: 'Q',
            _target: 'Q',
          },
          {
            _source: 'R',
            _target: 'R',
          },
          {
            _source: 'S',
            _target: 'S',
          },
          {
            _source: 'T',
            _target: 'T',
          },
          {
            _source: 'U',
            _target: 'U',
          },
          {
            _source: 'V',
            _target: 'V',
          },
          {
            _source: 'W',
            _target: 'W',
          },
          {
            _source: 'X',
            _target: 'X',
          },
          {
            _source: 'Y',
            _target: 'Y',
          },
          {
            _source: 'Z',
            _target: 'Z',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'underlined-double',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'a',
          },
          {
            _source: 'b',
            _target: 'b',
          },
          {
            _source: 'c',
            _target: 'c',
          },
          {
            _source: 'd',
            _target: 'd',
          },
          {
            _source: 'e',
            _target: 'e',
          },
          {
            _source: 'f',
            _target: 'f',
          },
          {
            _source: 'g',
            _target: 'g',
          },
          {
            _source: 'h',
            _target: 'h',
          },
          {
            _source: 'i',
            _target: 'i',
          },
          {
            _source: 'j',
            _target: 'j',
          },
          {
            _source: 'k',
            _target: 'k',
          },
          {
            _source: 'l',
            _target: 'l',
          },
          {
            _source: 'm',
            _target: 'm',
          },
          {
            _source: 'n',
            _target: 'n',
          },
          {
            _source: 'o',
            _target: 'o',
          },
          {
            _source: 'p',
            _target: 'p',
          },
          {
            _source: 'q',
            _target: 'q',
          },
          {
            _source: 'r',
            _target: 'r',
          },
          {
            _source: 's',
            _target: 's',
          },
          {
            _source: 't',
            _target: 't',
          },
          {
            _source: 'u',
            _target: 'u',
          },
          {
            _source: 'v',
            _target: 'v',
          },
          {
            _source: 'w',
            _target: 'w',
          },
          {
            _source: 'x',
            _target: 'x',
          },
          {
            _source: 'y',
            _target: 'y',
          },
          {
            _source: 'z',
            _target: 'z',
          },
          {
            _source: 'A',
            _target: 'A',
          },
          {
            _source: 'B',
            _target: 'B',
          },
          {
            _source: 'C',
            _target: 'C',
          },
          {
            _source: 'D',
            _target: 'D',
          },
          {
            _source: 'E',
            _target: 'E',
          },
          {
            _source: 'F',
            _target: 'F',
          },
          {
            _source: 'G',
            _target: 'G',
          },
          {
            _source: 'H',
            _target: 'H',
          },
          {
            _source: 'I',
            _target: 'I',
          },
          {
            _source: 'J',
            _target: 'J',
          },
          {
            _source: 'K',
            _target: 'K',
          },
          {
            _source: 'L',
            _target: 'L',
          },
          {
            _source: 'M',
            _target: 'M',
          },
          {
            _source: 'N',
            _target: 'N',
          },
          {
            _source: 'O',
            _target: 'O',
          },
          {
            _source: 'P',
            _target: 'P',
          },
          {
            _source: 'Q',
            _target: 'Q',
          },
          {
            _source: 'R',
            _target: 'R',
          },
          {
            _source: 'S',
            _target: 'S',
          },
          {
            _source: 'T',
            _target: 'T',
          },
          {
            _source: 'U',
            _target: 'U',
          },
          {
            _source: 'V',
            _target: 'V',
          },
          {
            _source: 'W',
            _target: 'W',
          },
          {
            _source: 'X',
            _target: 'X',
          },
          {
            _source: 'Y',
            _target: 'Y',
          },
          {
            _source: 'Z',
            _target: 'Z',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'strikethrough-single',
      },
      {
        letter: [
          {
            _source: 'a',
            _target: 'a',
          },
          {
            _source: 'b',
            _target: 'b',
          },
          {
            _source: 'c',
            _target: 'c',
          },
          {
            _source: 'd',
            _target: 'd',
          },
          {
            _source: 'e',
            _target: 'e',
          },
          {
            _source: 'f',
            _target: 'f',
          },
          {
            _source: 'g',
            _target: 'g',
          },
          {
            _source: 'h',
            _target: 'h',
          },
          {
            _source: 'i',
            _target: 'i',
          },
          {
            _source: 'j',
            _target: 'j',
          },
          {
            _source: 'k',
            _target: 'k',
          },
          {
            _source: 'l',
            _target: 'l',
          },
          {
            _source: 'm',
            _target: 'm',
          },
          {
            _source: 'n',
            _target: 'n',
          },
          {
            _source: 'o',
            _target: 'o',
          },
          {
            _source: 'p',
            _target: 'p',
          },
          {
            _source: 'q',
            _target: 'q',
          },
          {
            _source: 'r',
            _target: 'r',
          },
          {
            _source: 's',
            _target: 's',
          },
          {
            _source: 't',
            _target: 't',
          },
          {
            _source: 'u',
            _target: 'u',
          },
          {
            _source: 'v',
            _target: 'v',
          },
          {
            _source: 'w',
            _target: 'w',
          },
          {
            _source: 'x',
            _target: 'x',
          },
          {
            _source: 'y',
            _target: 'y',
          },
          {
            _source: 'z',
            _target: 'z',
          },
          {
            _source: 'A',
            _target: 'A',
          },
          {
            _source: 'B',
            _target: 'B',
          },
          {
            _source: 'C',
            _target: 'C',
          },
          {
            _source: 'D',
            _target: 'D',
          },
          {
            _source: 'E',
            _target: 'E',
          },
          {
            _source: 'F',
            _target: 'F',
          },
          {
            _source: 'G',
            _target: 'G',
          },
          {
            _source: 'H',
            _target: 'H',
          },
          {
            _source: 'I',
            _target: 'I',
          },
          {
            _source: 'J',
            _target: 'J',
          },
          {
            _source: 'K',
            _target: 'K',
          },
          {
            _source: 'L',
            _target: 'L',
          },
          {
            _source: 'M',
            _target: 'M',
          },
          {
            _source: 'N',
            _target: 'N',
          },
          {
            _source: 'O',
            _target: 'O',
          },
          {
            _source: 'P',
            _target: 'P',
          },
          {
            _source: 'Q',
            _target: 'Q',
          },
          {
            _source: 'R',
            _target: 'R',
          },
          {
            _source: 'S',
            _target: 'S',
          },
          {
            _source: 'T',
            _target: 'T',
          },
          {
            _source: 'U',
            _target: 'U',
          },
          {
            _source: 'V',
            _target: 'V',
          },
          {
            _source: 'W',
            _target: 'W',
          },
          {
            _source: 'X',
            _target: 'X',
          },
          {
            _source: 'Y',
            _target: 'Y',
          },
          {
            _source: 'Z',
            _target: 'Z',
          },
          {
            _source: '0',
            _target: '0',
          },
          {
            _source: '1',
            _target: '1',
          },
          {
            _source: '2',
            _target: '2',
          },
          {
            _source: '3',
            _target: '3',
          },
          {
            _source: '4',
            _target: '4',
          },
          {
            _source: '5',
            _target: '5',
          },
          {
            _source: '6',
            _target: '6',
          },
          {
            _source: '7',
            _target: '7',
          },
          {
            _source: '8',
            _target: '8',
          },
          {
            _source: '9',
            _target: '9',
          },
          {
            _source: '!',
            _target: '!',
          },
          {
            _source: '?',
            _target: '?',
          },
          {
            _source: '.',
            _target: '.',
          },
          {
            _source: ',',
            _target: ',',
          },
          {
            _source: '"',
            _target: '"',
          },
          {
            _source: "'",
            _target: "'",
          },
        ],
        _name: 'crosshatch',
      },
    ],
  },
}
