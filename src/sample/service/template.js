export function getTemplate(path) {
  return fetch(path)
    .then(function (response) {
      return response.body.getReader();
    })
    .then(readAll);
}

async function readAll(reader) {
  let strHtml = "";
  const decoder = new TextDecoder();
  let res = await reader.read();
  while (!res.done) {
    strHtml += decoder.decode(res.value);
    res = await reader.read();
  }
  return strHtml;
}
