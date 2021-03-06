'use strict';


// will list all process and their status
exports.list = function(req, res) {  
    doIT()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// this make possible a dashboard tell that another iinstance not supervisoned by orchjs ir running  
exports.foreignInstance = function(req, res) {  
    doIT()
        .then(responseWithResult(res))
        .catch(handleError(res));
};


exports.handleError = (res, statusCode) => {
    statusCode = statusCode || 500;
    return (err) => {
        statusCode = err.statusCode ? err.statusCode : statusCode;
        err = err.message ? err.message : err;
        return res.status(statusCode).send(err);        
    };
};

exports.responseWithResult = (res, statusCode) => {
    statusCode = statusCode || 200;
        return (entity) => {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
};