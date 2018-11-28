const filmeImdbModel = require('../models/imdbInfo.model');

module.exports.findAllFilmes = async () => {

    try {

        const filmes = await filmeImdbModel.find({});

        return filmes;

    } catch (error) {

        console.log('Erro ao retornar posts', error);

    }
}