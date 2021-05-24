module.exports = {
  /* https://gist.github.com/iscanyc/7b031ef9f5dccb2b84b9b1eaad447bb6 */

  /**
   * @param {Object} object
   * @returns {String}
   */
  create(object) {
    if (typeof object !== "object") return false;
    const arr = Object.entries(object);
    if (!arr.length === 0) return false;
    let query = "";
    for (let i in arr) {
      if (!arr[i] || !arr[i][1]) continue;

      query += (i == 0 ? "?" : "&") + `${arr[i][0]}=${arr[i][1]}`;
    }
    return query;
  },

  /**
   * @param {String} query
   * @returns {Object}
   */
  parse(query) {
    if (typeof query !== "string") return false;

    let object = {};
    for (let set of query.replace("?", "").split("&")) {
      if (!set) continue;
      const parsed = set.split("=");
      if (!parsed) continue;
      object = { ...object, ...{ [parsed[0]]: parsed[1] } };
    }
    return object;
  },

  /**
   * @param {String} query
   * @param {String} key
   * @returns {Booelan}
   */
  has(query, key) {
    if (!query || !key) return false;
    return Object(this.parse(query)).hasOwnProperty(key);
  },
};
