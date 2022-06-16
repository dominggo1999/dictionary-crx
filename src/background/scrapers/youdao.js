import { loadUrl } from '~/util/loadUrl.js';
import { createUrl } from '~/util/createUrl.js';

export const indoDefinitions = async (word, sendRes) => {
  if (!word) {
    sendRes({});
  }

  const url = createUrl('https://inter.youdao.com/intersearch?q=QUERY&from=en&to=id&interversion=23', word);

  const { json, error } = await loadUrl(url, {
    json: true,
  });

  if (error) {
    sendRes({
      message: 'Something went wrong when finding definitions',
    });
  }

  let definitions = [];
  if (json?.data?.eh?.trs) {
    definitions = json.data.eh.trs;
    definitions = definitions
      .filter((item) => {
        return item.i;
      })
      .map((item) => {
        const split = item.i.split('.');
        // If definition not found then there is no word type (ex : n, adj, adv)
        if (split.length < 2) {
          return [];
        }

        return {
          type: split[0],
          def: split[1],
        };
      });
  }

  sendRes({
    indonesia: definitions,
  });
};
