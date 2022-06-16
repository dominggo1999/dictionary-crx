import React from 'react';
import short from 'short-uuid';
import { IndonesianWrapper, DefItem } from './Indonesian.style.jsx';
import useDictionary from '~/hooks/useDictionary.jsx';

const Indonesian = () => {
  const {
    results: defs, loading, error, word,
  } = useDictionary('youdao', 'indonesia');

  return (
    <IndonesianWrapper>
      <ul>
        {
          defs?.length > 0 && defs.map((i) => {
            return (
              <DefItem key={short.generate()}>
                <span>{i.type}</span>
                {i.def}
              </DefItem>
            );
          })
        }
      </ul>
    </IndonesianWrapper>
  );
};

export default Indonesian;
