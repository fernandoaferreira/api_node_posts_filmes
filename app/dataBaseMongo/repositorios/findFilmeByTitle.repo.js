const filmeImdbModel = require('../models/imdbInfo.model');

const findFilme = {

    gravandoFilmeNoBanco: async (filme) => {

        const nome = filme.toUpperCase();

        const filmeNaBase = await filmeImdbModel.find({ "Title": nome });

        return filmeNaBase;

    }
};


module.exports.buscarFilme = async (nomeDoFilme) => {

    let filmeParaGravar = Object.create(findFilme);

    const filmeGravado = await filmeParaGravar.gravandoFilmeNoBanco(nomeDoFilme);

    return filmeGravado;

};