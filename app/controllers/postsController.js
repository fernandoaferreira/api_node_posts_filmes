const createPost = require('../dataBaseMongo/repositorios/createPosts.repo');
const deletePost = require('../dataBaseMongo/repositorios/deleteById.repo');
const findAllPost = require('../dataBaseMongo/repositorios/findAllPosts.repo');
const findByIdPost = require('../dataBaseMongo/repositorios/findByIdPost.repo');
const updateByIdPost = require('../dataBaseMongo/repositorios/updateById.repo');
const createFilmeImdb = require('../dataBaseMongo/repositorios/createFilme.repo');

const serviceInfoFilme = require('../service/infoFilmesOMBbapi');

module.exports.listarPosts = async (req, res) => {

    try {
        const posts = await findAllPost.findAllPosts();

        res.status(200).send(posts);

    } catch (error) {

        console.log(error);
        res.status(500).send('Erro ao buscar posts');

    }
};

module.exports.listarPostsById = async (req, res) => {

    const { id } = req.body;

    try {

        const post = await findByIdPost.findByIdPost(id);

        const imdbInfo = await serviceInfoFilme.getInfoFilmes(post.movie_title);

        await createFilmeImdb.criarFilme(imdbInfo);

        if (imdbInfo.Error) {
            res.status(200).json({
                post: post,
                imdbInfo: 'omdbApi não tem informações do filme.'
            });
        } else {
            res.status(200).json({
                post: post,
                imdbInfo: imdbInfo
            });
        };

    } catch (error) {

        console.log(error);
        res.status(500).send('Erro ao trazer post por id');

    }

}

module.exports.atualizarPostById = async (req, res) => {

    const dados = req.body;
    const { id } = req.params;

    try {
        const postAlterado = await updateByIdPost.updateByIdPost(id, dados);

        res.status(200).send(postAlterado);

    } catch (error) {

        console.log(error);
        res.status(500).send('Erro ao alterar post');

    }

}

module.exports.deletarPostById = async (req, res) => {

    const { id } = req.params;

    try {
        const postDeletado = await deletePost.deletePost(id);

        res.status(200).send(`Post ID: ${postDeletado} deletado com sucesso`);

    } catch (error) {

        console.log(error);
        res.status(500).send('Erro ao deletar post');

    }

}

module.exports.criarPost = async (req, res) => {

    const dados = req.body;

    try {

        const postCadastrado = await createPost.criarPost(dados);

        res.status(200).send(`Post ${postCadastrado} cadastrado com sucesso!`);

    } catch (error) {

        console.log(error);
        res.status(500).send('Erro ao cadastrar post');

    }

}