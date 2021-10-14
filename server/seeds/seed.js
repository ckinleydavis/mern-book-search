const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        username: 'ckinleydavis',
        email: 'email@email.com',
        password: 'password'
    });

    process.exit();
});