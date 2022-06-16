import React from 'react';
import useDictionary from '~/hooks/useDictionary.jsx';
import { highlightWord } from '~/util/highlightWord.js';
import { Long, Short, EnglishWrapper } from './English.style.jsx';

const English = () => {
  const {
    results, loading, error, word,
  } = useDictionary('vocab', 'english');

  const { short, long } = results || {};

  return (

    <EnglishWrapper>
      <Short>{short && highlightWord(short, word)}</Short>
      <Long>{long && highlightWord(long, word)}</Long>
    </EnglishWrapper>
  );
};

export default English;
