/* eslint-disable new-cap */
import base64ArrayBuffer from '~/util/base64ArrayBuffer.js';

export const loadUrl = async (url, options = {}) => {
  const { json, audioBase64 } = options;

  try {
    const res = await fetch(url);

    if (audioBase64) {
      const buffer = await res.arrayBuffer();
      const string = await base64ArrayBuffer(buffer);
      const data = `data:${res.headers.get('content-type')};base64,${string}`;
      return {
        audioBase64: data,
      };
    }

    if (json) {
      return {
        json: await res.json(),
      };
    }

    return {
      html: await res.text(),
    };
  } catch (error) {
    return { error };
  }
};
