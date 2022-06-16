import create from 'zustand';
import produce from 'immer';

export const initialState = '';

const useWordStore = create((set, get) => {
  return {
    word: initialState,
    changeWord: (newWord) => {
      return set(produce((draft) => {
        draft.word = newWord;
      }));
    },
  };
});

export default useWordStore;
