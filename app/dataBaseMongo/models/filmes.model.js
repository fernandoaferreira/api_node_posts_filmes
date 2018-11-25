const mongo = require('../conectaBanco/conectMongo');

const PostsSchema = new mongo.Schema({

    titulo: {
        type: String,
        required: true,
        lowercase: true
    },
    post_conteudo: {
        type: String,
        required: true,
        lowercase: true
    },
    autor: {
        type: String,
        required: true,
        lowercase: true
    },
    data_criacao: {
        type: String,
        required: true,
        lowercase: true
    },
    movie_title: {
        type: String,
        required: true,
        lowercase: true
    },
    comentarios: [{
        id: String,
        nome_do_autor: String,
        conteudo: String
    }]

});

const Post = mongo.model('Post', PostsSchema);

module.exports = Post;