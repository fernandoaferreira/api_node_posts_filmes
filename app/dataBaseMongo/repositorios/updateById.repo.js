const postFilmeModel = require('../models/filmes.model');

module.exports.updateByIdPost = async (id, dados) => {

    try {

        await postFilmeModel.findOneAndUpdate({ _id: id },
            {
                titulo: dados.titulo,
                post_conteudo: dados.post_conteudo,
                autor: dados.autor,
                data_criacao: dados.data_criacao,
                movie_title: dados.movie_title,
            });

        const postalterado = await postFilmeModel.findById({ _id: id });
        
        return postalterado;

    } catch (error) {

        console.log('Erro ao alterar post', error);

    }
}