const { User, Thought } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .then((courses) => res.json(courses))
            .catch((err) => res.status(500).json(err));
    },
    getUserById(req, res) {
        
    },
    createUser(req, res) {
        
    },
    updateUser(req, res) {
        
    },
    deleteUser(req, res) {
        
    },
    addFriend(req, res) {
        
    },
    removeFriend(req, res) {
        
    }
}