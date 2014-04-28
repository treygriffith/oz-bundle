/**
 * Module dependencies
 */
var Oz = require('oz')
  , attrTag = require('oz-attr')
  , eachTag = require('oz-each')
  , evtTag = require('oz-evt')
  , ifTag = require('oz-if')
  , scopeTag = require('oz-scope')
  , textTag = require('oz-text')
  , valTag = require('oz-val');

/**
 * Add plugins.
 */
Oz
  .use(attrTag)
  .use(eachTag)
  .use(evtTag)
  .use(ifTag)
  .use(scopeTag)
  .use(textTag)
  .use(valTag);

/**
 * Expose Oz
 */
module.exports = Oz;
