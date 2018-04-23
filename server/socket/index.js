'use strict';

/**
 * Main application socket.io 
 * 
*/

module.exports = function(socketIO,server) {
    // A job making request for connection
    socket.on('connection')
    // A job auth himself
    socket.on('authentication')
    // A job making request for execution
    socket.on('requestExecution')
        // we get a previously of execution time of JOB, if not ended in time we will try get status, if not response the job has been stopped by HOST or not connected
        socket.on('status')
    // A job tell us that execution endedd with success
    socket.on('endExecution')
    // A job tell us that execution was exited
    socket.on('exitedExecution')

};