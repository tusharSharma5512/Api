module.exports = (app) => {

    const users = require('./controllers/user');

    app.get('/api/users', users.read);

    app.post('/api/users', users.create);

    app.put('/api/users/:id', users.update);

    app.delete('/api/users/:id', users.delete);
};