let request = require("request");

let options = { method: 'POST',
  url: 'http://localhost:3000/listar-post-by-id',
  headers: { 'content-type': 'application/json' },
  body: { id: '5bf9e3247ea4954cf4feb2df' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});