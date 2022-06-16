import React, { useRef, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHotkeys } from '@mantine/hooks';
import { SearchBarWrapper } from './SearchBar.style.jsx';
import useWordStore from '~/store/useWordStore.jsx';
import Pronunciation from '../Pronunciation/Pronunciation.jsx';

const SearchBar = () => {
  const word = useWordStore((state) => state.word);
  const wordRef = useRef();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(word || '');

  useLayoutEffect(() => {
    setSearchQuery(word);
  }, [word]);

  const searchWord = (e) => {
    e.preventDefault();
    searchQuery && navigate(`/${searchQuery}`);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    const onlyAlphabets = /^[a-zA-Z]+$/gi;

    if (onlyAlphabets.test(val.trim()) || val === '') {
      setSearchQuery(val);
    }
  };

  useHotkeys([
    ['/', () => wordRef.current.focus()],
  ]);

  return (
    <SearchBarWrapper>
      <form onSubmit={searchWord}>
        <input
          ref={wordRef}
          type="text"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
      <Pronunciation />
    </SearchBarWrapper>
  );
};

export default SearchBar;
