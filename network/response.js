exports.success= function (req, res, message, status) {
    res.status(status || 200).send({
        err:'',
        body: message}
        );
}

exports.error= function (req, res, message,status, details) {
    console.error('response error:'+details);// que es lo que a sucedido
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}