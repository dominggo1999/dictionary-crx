import { messageToBackground } from './message.js';

export const fetchDictionary = async (word, type) => {
  if (!word) return;

  return messageToBackground({
    word,
    type,
  });
};
