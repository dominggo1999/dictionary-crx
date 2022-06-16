import { load } from 'cheerio';
import { createUrl } from '~/util/createUrl.js';
import { loadUrl } from '~/util/loadUrl.js';
import { getSynonyms } from '~/util/extractFromHtml.js';

export const powerThesaurusSynonyms = async (word, sendRes) => {
  if (!word) {
    sendRes({});
  }

  const url = createUrl('https://www.powerthesaurus.org/QUERY/synonyms', word);
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

  const synonyms = await getSynonyms($, 'a[title~="synonym"]');

  sendRes({ synonyms });
};
