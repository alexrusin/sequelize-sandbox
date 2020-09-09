const sequelize = require('../database/connection');
const { DataTypes } = require('sequelize');
const User = require('./models/user.js')(sequelize, DataTypes);

const getUserById = async (id) => {
    const user = await User.findOne({where: { id }});
    const post = await user.createPost({
        title: 'Just Another Post', 
        body: 'This is just another post'
    });
    console.log(post);
}

getUserById(3);



