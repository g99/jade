/**
 * Created by HB on 2016-02-03.
 */
//binding task controller
var task = require('./routes/taskController');
exports.route = function (app) {
    app.get('/', task.list);
    app.post('/createTask', task.create);
    app.post('/updateTask', task.update);
    app.post('/removeTask', task.remove);
};