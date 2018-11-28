module.exports = (appApiPosts) => {

    appApiPosts.get('/home', (req, res) => {
        appApiPosts.app.controllers.viewsController.viewHome(req, res);
    });

    appApiPosts.get('/post/:id', (req, res) => {
        appApiPosts.app.controllers.viewsController.viewPost(req, res);
    });
}