import React from 'react';
import short from 'short-uuid';
import { Link } from 'react-router-dom';
import { SynonymsWrapper, SynonymItem } from './Synonyms.style.jsx';
import useDictionary from '~/hooks/useDictionary.jsx';

const Synonyms = () => {
  const {
    results: synonyms, loading, error, word,
  } = useDictionary('synonyms', 'synonyms');

  return (
    <SynonymsWrapper>
      {
        synonyms?.length > 0 && synonyms.map((i) => {
          return (
            <Link
              to={`/${i}`}
              key={short.generate()}
            >
              <SynonymItem>{i}</SynonymItem>
            </Link>
          );
        })
      }
    </SynonymsWrapper>
  );
};

export default Synonyms;
