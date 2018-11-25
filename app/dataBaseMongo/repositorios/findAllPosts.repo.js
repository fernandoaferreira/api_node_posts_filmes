const postFilmeModel = require('../models/filmes.model');

module.exports.findAllPosts = async () => {

    try {

        const posts = await postFilmeModel.find({});

        return posts;

    } catch (error) {

        console.log('Erro ao retornar posts', error);

    }
}