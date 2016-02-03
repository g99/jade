/**
 * Created by HB on 2016-02-03.
 */
/*데이터베이스를 연결하는 역할*/
/*binding mongoose module*/
var mongoose = require('mongoose');

/* connection uri */
var dbURI = 'mongodb://localhost:27017';

/* exports connect function to app.js */
exports.connect = function () {
    // get the database connection pool
    mongoose.connect(dbURI);

    // DB Connection Events
    // Success to connect database
    mongoose.connection.on('connected', function () {
        console.log('몽구스에서 커넥션 연결에 성공하였음 !! URI는 ' + dbURI);
    });

    // Fail to connect database
    mongoose.connection.on('error ', function (err) {
        console.log('몽구스에서 커넥션 연결에 실패하였음 !! URI는 ' + dbURI);
    });

    // When the connection has disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('DB에서 연결이 분리되었음.');
    });

    // if the Node.js process is going down, close database
    // connection pool
    process.on('SIGNIT', function () {
        mongoose.connection.close(function () {
            console.log('프로그램이 다운되었음... 연결이 끊어집니다.');
            process.exit(0);
        });
    });
};

