module.exports = (appApiPosts) => {

	appApiPosts.get('/', (req, res) => {
		res.send('Bem vindo a API Altrar Teste!');
	});

	appApiPosts.get('/listar-posts', (req, res) => {
		appApiPosts.app.controllers.postsController.listarPosts(req, res);
	});

	appApiPosts.post('/listar-post-by-id', (req, res) => {
		appApiPosts.app.controllers.postsController.listarPostsById(req, res);
	});

	appApiPosts.put('/atualizar-post-by-id/:id', (req, res) => {
		appApiPosts.app.controllers.postsController.atualizarPostById(req, res);
	});

	appApiPosts.delete('/deletar-post-by-id/:id', (req, res) => {
		appApiPosts.app.controllers.postsController.deletarPostById(req, res);
	});

	appApiPosts.post('/criar-post', (req, res) => {
		appApiPosts.app.controllers.postsController.criarPost(req, res);
	});

};