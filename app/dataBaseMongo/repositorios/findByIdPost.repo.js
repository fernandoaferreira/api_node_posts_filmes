const postFilmeModel = require('../models/filmes.model');

module.exports.findByIdPost = async (id) => {

    try {
        
        const post = await postFilmeModel.findById({ _id: id })

        return post;

    } catch (error) {

        console.log('Erro ao pesquisar post por id', error);

    }
}