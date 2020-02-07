// importando mock arquivo externo

const worker = require('../controllers/worker.controller');
module.exports = app => {
    // Autorizando o CORS no header para receber chamada localhost
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });
    // Rota retorna array de contatos
    app.get("/rpc/list", async(req, res) => {
        const list = await worker.getRpcprogramming(req.query);
        res.send(list);
    });
    app.get("/rpc/now", async(req, res) => {
        const response = await worker.getProgNow(req.query);
        res.send(response);
    });
};