'use strict';

import { DbService } from './db.service.js';

const KEY = 'cart';

export default {
  query,
  get,
  remove,
  add,
  update
};

async function query() {
  var cart = await DbService.query(KEY);
  return cart;
}

function get(id) {
  return DbService.get(KEY, id);
}

function remove(id) {
  return DbService.delete(KEY, id);
}

function add(product) {
  return DbService.post(KEY, product);
}

function update(product) {
  return DbService.put(KEY, product);
}
