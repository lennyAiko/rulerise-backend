export function makePlural(word) {
  if (word && typeof word === 'string') {
    if (word.endsWith('s')) {
      return word
    }
    if (word.endsWith('y')) {
      return word.slice(0, -1) + 'ies'
    }
    return word + 's'
  }
  return word
}
