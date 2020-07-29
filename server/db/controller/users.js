const { user } = require('../models');

async function createUser(data) {
  return await user.create(data);
}

async function fetchAllUser() {
  return await user.findAll({ include: 'profile' });
}

async function getUser(id) {
  return user.findOne({
    where: {
      id
    }
  });
}

module.exports = {
  createUser,
  getUser,
  fetchAllUser
};