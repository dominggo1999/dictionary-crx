import React from 'react';
import SearchBar from '~/common/SearchBar/SearchBar.jsx';
import { DefinitionsWrapper, Sticky } from './Definitions.style.jsx';
import Indonesian from '../Indonesian/Indonesian.jsx';
import English from '../English/English.jsx';
import Synonyms from '../Synonyms/Synonyms.jsx';

const Definitions = () => {
  return (

    <Sticky>
      <DefinitionsWrapper>
        <SearchBar />
        <Indonesian />
        <English />
        <Synonyms />
      </DefinitionsWrapper>
    </Sticky>

  );
};

export default Definitions;
