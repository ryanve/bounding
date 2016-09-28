!function(root, name, make) {
  typeof module != 'undefined' && module.exports ? module.exports = make() : root[name] = make()
}(this, 'bounding', function() {

  var top = 'top'
  var bottom = 'bottom'
  var left = 'left'
  var right = 'right'
  var width = 'width'
  var height = 'height'
  var x = 'x'
  var y = 'y'

  /**
   * @param {Element} element
   * @return {Object}
   */
  function bounding(element) {
    return normalize(element.getBoundingClientRect())
  }

  /**
   * @param {Object} r
   * @return {Object} normalized clone
   */
  function normalize(r) {
    var o = {}
    o[x] = o[0 > (o[width] = (o[right] = r[right]) - (o[left] = r[left])) ? right : left]
    o[y] = o[0 > (o[height] = (o[bottom] = r[bottom]) - (o[top] = r[top])) ? bottom : top]
    return o
  }

  return bounding
});
