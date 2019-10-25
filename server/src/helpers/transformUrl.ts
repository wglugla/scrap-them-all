const transformUrl = (url: string) => {
  let httpRegex: RegExp = /^(http|https):/;
  if (!url.match(httpRegex)) {
    url = `http://${url}`;
  }
  return url;
};

export default transformUrl;
