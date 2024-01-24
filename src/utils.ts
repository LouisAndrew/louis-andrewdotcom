export const padNumber = (num: number) => (num < 10 ? `0${num}` : num);
export const parseContent = (content: string) => {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
  const hasUrl = new RegExp(urlRegex).test(content);
  const contentWithNewLine = content.replaceAll("\n", "<br />");

  if (hasUrl) {
    let output = contentWithNewLine;
    const matches = content.matchAll(urlRegex);
    for (const match of matches) {
      const [url] = match;
      const link = `<a href="${url}" target="_blank">${url}</a>`;
      output = output.replace(url, link);
    }

    return output;
  }

  return contentWithNewLine;
};
