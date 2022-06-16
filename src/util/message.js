export const messageToBackground = async (message) => {
  // eslint-disable-next-line no-undef
  return chrome?.runtime?.sendMessage(message);
};
