const filmeImdbModel = require('../models/imdbInfo.model');

module.exports.criarFilme = async (dados) => {

    try {
        const filmeCadastrado = await filmeImdbModel.create(dados);

        console.log(`Filme ID ${filmeCadastrado.id} cadastrado com sucesso`);

        return filmeCadastrado.id;

    } catch (error) {

        console.log(`Erro ao carregar dodos no mongo: ${error}`);

    }

};