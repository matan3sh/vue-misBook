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
  //   if (!cart || !cart.length) {
  //     cart = _createDefaultbooks();
  //     await DbService.insert(KEY, cart);
  //   }
  return cart;
}

function get(id) {
  //   if (!id) return Promise.resolve(getEmptybook());
  return DbService.get(KEY, id);
}

function remove(id) {
  return DbService.delete(KEY, id);
}

// function save(product) {
//   if (product._id) return DbService.put(KEY, product);
//   else return DbService.post(KEY, product);
// }

function add(product) {
  return DbService.post(KEY, product);
}

function update(product) {
  return DbService.put(KEY, product);
}
