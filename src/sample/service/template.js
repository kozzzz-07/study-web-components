export function getTemplate(path) {
  return fetch(path)
    .then(function (response) {
      return response.body.getReader();
    })
    .then(readAll);
}

let strHtml = "";
const decoder = new TextDecoder();

// async function readChunk({ done, value, reader }) {
//   if (done) {
//     return strHtml;
//   }
//   strHtml += decoder.decode(value);
//   const res = await reader.read();
//   readChunk({ ...res, reader });
// }

async function readAll(reader) {
  let res = await reader.read();
  while (!res.done) {
    strHtml += decoder.decode(res.value);
    res = await reader.read();
  }
  return strHtml;
}
