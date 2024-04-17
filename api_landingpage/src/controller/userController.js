const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function CriarUsuario(request, response) {
    
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.telefone
    );

    const query = 'INSERT INTO usuarios(nome,email,telefone) VALUES(?,?,?)';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    CriarUsuario
}