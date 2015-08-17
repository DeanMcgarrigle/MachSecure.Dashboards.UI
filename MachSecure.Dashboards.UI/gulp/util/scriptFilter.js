/* scriptFilter
 * ------------
 *  Filters out non .js files. Prevents
 *  accidental inclusion of possible hidden files
 */

var path = require('path');

module.exports = function(name) {

    return /(\.(js)$)/i.test(path.extname(name));

};