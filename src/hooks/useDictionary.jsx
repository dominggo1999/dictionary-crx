import React, { useEffect, useState } from 'react';
import { fetchDictionary } from '~/util/fetchDictionary.js';
import useWordStore from '~/store/useWordStore.jsx';

const useDictionary = (type, key) => {
  const word = useWordStore((state) => state.word);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  useEffect(() => {
    const getResults = async () => {
      setResults(null);
      setLoading(true);

      try {
        const { [key]: ex } = await fetchDictionary(word, type);
        setResults(ex);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [word]);

  return {
    loading, error, results, word,
  };
};

export default useDictionary;
