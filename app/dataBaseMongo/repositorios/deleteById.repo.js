const postFilmeModel = require('../models/filmes.model');

module.exports.deletePost = async (id) => {

    try {

        const postDeletado = await postFilmeModel.deleteOne({ _id: id });

        return postDeletado

    } catch (error) {

        console.log('Erro ao deletar post', error);

    }
}