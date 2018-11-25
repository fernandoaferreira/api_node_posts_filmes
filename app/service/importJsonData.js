const dataJson = require('./MOCK_DATA');
const importarDadosParaMongo = require('../dataBaseMongo/repositorios/createPosts.repo');

const importacao = {

    importFilme: async function() {

        dataJson.forEach(post => {

            importarDadosParaMongo.criarPost(post);

        })
    }

};

importacao.importFilme();


