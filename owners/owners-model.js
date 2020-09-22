const db = require('../data/dbConfig.js');

function getItem(id) {
  return db('items').where({ id }).first();
}

function getItems(owner_id) {
  return db('items').where({ owner_id });
}

function add(newItem) {
  return db('items')
    .insert(newItem)
    .then(ids => {
      return getItem(ids[0]);
    });
}

function update(id, changes) {
  return db('items').where({ id }).update(changes);
}

function remove(id) {
  return db('items').where('id', id).del();
}

module.exports = {
  getItem,
  getItems,
  add,
  update,
  remove
};