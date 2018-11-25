let request = require('request-promise');

module.exports.getInfoFilmes = async (nomeFilme) => {

    let options = {
        method: 'GET',
        url: `http://www.omdbapi.com/?t=${nomeFilme}&apikey=fa2a00e1`,
        headers: { 'content-type': 'application/json' }
    };

    try{
        const dados = await request(options);
        return JSON.parse(dados);

    } catch(error) {

        return error;

    }

};

