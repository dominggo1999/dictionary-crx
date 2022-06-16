import { convert } from 'html-to-text';

export const getElementSingle = async ($, selector) => {
  return convert($(selector).html());
};

export const getSentenceExamples = async ($, selector) => {
  const list = [];
  await $(selector).find('tr').each((i, elem) => {
    const example = $(elem);
    const className = example.attr('class');
    if (className && className.indexOf('expand') === -1) {
      list.push(convert(example.text().trim()));
    }
  });

  return list;
};

export const getSynonyms = async ($, selector) => {
  const list = [];
  await $(selector).each((i, elem) => {
    const synonym = $(elem);
    list.push(convert(synonym.text().trim()));
  });

  return list;
};
