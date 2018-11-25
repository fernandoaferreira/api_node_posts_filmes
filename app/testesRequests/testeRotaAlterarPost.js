let request = require("request");

let options = { method: 'PUT',
  url: 'http://localhost:3000/atualizar-post-by-id/5bf9e3247ea4954cf4feb2da',
  headers: { 'content-type': 'application/json' },
  body:
   { titulo: 'Teste alteração',
     post_conteudo: 'Teste alteração',
     autor: 'Teste alteração',
     data_criacao: 'Teste alteração',
     movie_title: 'Teste alteração' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});