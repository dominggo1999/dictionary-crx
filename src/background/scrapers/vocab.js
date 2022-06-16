import { load } from 'cheerio';
import { createUrl } from '~/util/createUrl.js';
import { loadUrl } from '~/util/loadUrl.js';
import { getElementSingle } from '~/util/extractFromHtml.js';

export const vocabularyComDefinitions = async (word, sendRes) => {
  if (!word) {
    sendRes({});
  }

  const url = createUrl('https://www.vocabulary.com/dictionary/definition.ajax?search=QUERY&lang=en', word);
  const { html, error } = await loadUrl(url);

  if (error) {
    sendRes({
      message: 'Something went wrong when finding definitions',
    });
  }

  const $ = await load(html, {
    xml: {
      normalizeWhitespace: true,
    },
  });
  const short = await getElementSingle($, '.short');
  const long = await (getElementSingle($, '.long'));

  sendRes({
    english: {
      short,
      long,
    },
  });
};
