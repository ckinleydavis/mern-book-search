const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        username: 'ckinleydavis',
        email: 'email@gmail.com',
        password: 'password'
    });

    process.exit();
});