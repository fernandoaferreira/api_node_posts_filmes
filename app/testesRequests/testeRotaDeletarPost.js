let request = require("request");

let options = { method: 'DELETE',
  url: 'http://localhost:3000/deletar-post-by-id/5bf9e3247ea4954cf4feb2da' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});