import { load } from 'cheerio';
import { createUrl } from '~/util/createUrl.js';
import { loadUrl } from '~/util/loadUrl.js';
import { getSentenceExamples } from '~/util/extractFromHtml.js';

export const hippoSentences = async (word, sendRes) => {
  if (!word) {
    sendRes({});
  }

  const url = createUrl('https://www.wordhippo.com/what-is/sentences-with-the-word/QUERY.html', word);
  const { html, error } = await loadUrl(url);

  if (error) {
    sendRes({
      message: 'Something went wrong when finding sentences',
    });
  }

  const $ = await load(html, {
    xml: {
      normalizeWhitespace: true,
    },
  });
  const sentences = await getSentenceExamples($, '.wordtype + div');

  sendRes({
    sentences,
  });
};
