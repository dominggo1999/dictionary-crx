/* eslint-disable no-undef */
import { hippoSentences } from '~/background/scrapers/hippo.js';
import { vocabularyComDefinitions } from '~/background/scrapers/vocab.js';
import { googleTTS } from '~/background/scrapers/audio.js';
import { indoDefinitions } from '~/background/scrapers/youdao.js';
import { powerThesaurusSynonyms } from '~/background/scrapers/synonyms.js';

// Scrape dictionaries and thesaurus
chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  const { word, type } = req;

  switch (type) {
    case 'hippo':
      hippoSentences(word, sendRes);
      break;
    case 'vocab':
      vocabularyComDefinitions(word, sendRes);
      break;
    case 'audio':
      googleTTS(word, sendRes);
      break;
    case 'youdao':
      indoDefinitions(word, sendRes);
      break;
    case 'synonyms':
      powerThesaurusSynonyms(word, sendRes);
      break;
    default:
      sendRes({ message: 'No action spesified' });
      break;
  }

  return true;
});
