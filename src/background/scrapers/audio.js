import { createUrl } from '~/util/createUrl.js';
import { loadUrl } from '~/util/loadUrl.js';

export const googleTTS = async (word, sendRes) => {
  if (!word) {
    sendRes({});
  }

  const url = createUrl('https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=en&q=QUERY', word);
  const { audioBase64, error } = await loadUrl(url, {
    audioBase64: true,
  });

  if (error) {
    sendRes({
      message: 'Something went wrong when finding audio',
    });
  }

  sendRes({ audioBase64 });
};
