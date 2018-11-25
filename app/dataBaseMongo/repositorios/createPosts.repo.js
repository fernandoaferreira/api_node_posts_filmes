const postFilmeModel = require('../models/filmes.model');

module.exports.criarPost = async (dados) => {

    try {
        const postCadastrado = await postFilmeModel.create(dados);

        console.log(`Post ID ${postCadastrado.id} cadastrado com sucesso`);

        return postCadastrado.id;

    } catch (error) {

        console.log(`Erro ao carregar dodos no mongo: ${error}`);

    }

};