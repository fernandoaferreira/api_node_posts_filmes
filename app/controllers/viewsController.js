const findAllPost = require('../dataBaseMongo/repositorios/findAllPosts.repo');
const findByIdPost = require('../dataBaseMongo/repositorios/findByIdPost.repo');
const serviceInfoFilme = require('../service/infoFilmesOMBbapi');
const gravarFilmeNoBanco = require('../dataBaseMongo/repositorios/createFilme.repo');
const findFilmeNaBase = require('../dataBaseMongo/repositorios/findFilmeByTitle.repo');


module.exports.viewHome = async (req, res) => {

    try {
        const posts = await findAllPost.findAllPosts();

        res.render('home', {
            posts: posts.slice(0, 10)
        });

    } catch (error) {

        console.log('Erro na pagina inicial', error);
        res.render('home');

    }


};

module.exports.viewPost = async (req, res) => {

    const { id } = req.params;

    console.log('id do post params', id);

    try {
        let post = await findByIdPost.findByIdPost(id);

        let postComentarios = post.comentarios;

        const filmeNaBase = await findFilmeNaBase.buscarFilme(post.movie_title);

        if (filmeNaBase === null || filmeNaBase.length === 0) {

            console.log('Filme não existe na base, pesquisar no imdb ...');

            const imdbInfo = await serviceInfoFilme.getInfoFilmes(post.movie_title);

            console.log('Post do ID', post);

            if (imdbInfo.Error) {

                let info = {
                    Title: "omdbApi não encontrou o filme",
                    Poster: "http://placehold.it/230sx350",
                    Year: "Sem dados",
                    Director: "Sem dados",
                    imdbRating: "Sem dados"
                }
                res.render('post', {
                    post: post,
                    info: info,
                    comentarios: postComentarios
                });

            } else {

                await gravarFilmeNoBanco.criarFilme(imdbInfo);

                res.render('post', {
                    post: post,
                    info: imdbInfo,
                    comentarios: postComentarios
                });
            };

        } else {

            console.log('Filme existe na base!');

            res.render('post', {
                post: post,
                info: filmeNaBase[0],
                comentarios: postComentarios
            });

        }

    } catch (error) {

        console.log('Erro ao trazer pagina de post: ', error);

        res.render('erro');
    };

};