"use strict";
const slugify = require("slugify");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

function createSlug(str) {
  return slugify(str.toLowerCase().trim());
}

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = createSlug(data.name);
      }
    },
    beforeUpdate: async (params, data) => {
      data.slug = createSlug(data.name);
    },
  },
};
