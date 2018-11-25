let request = require("request");

let options = { method: 'GET',
  url: 'http://localhost:3000/listar-posts',
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});