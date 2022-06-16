import parse from 'html-react-parser';

export const highlightWord = (sentence, word) => {
  const regexp = new RegExp(`\\b${word}\\b`, 'gi');
  const match = regexp.exec(sentence);

  if (!match || match.length === 0) {
    return sentence;
  }

  return parse(sentence.replaceAll(regexp, `<b>${match[0]}</b>`));
};
