const findAllPost = require('../dataBaseMongo/repositorios/findAllPosts.repo');

module.exports.viewHome = async (req, res) => {

    try {
        const posts = await findAllPost.findAllPosts();

        res.render('home', {
            posts: posts
        });

    } catch(error) {

        res.render('home');

    }
    

};

module.exports.viewPost = (req, res) => {

    const { id } = req.params;

    console.log('id do post params', id);

    res.render('post');

}