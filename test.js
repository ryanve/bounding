!function() {
  var bounding = typeof require == 'function' ? require('./') : this.bounding
  var props = ['top', 'bottom', 'left', 'right', 'width', 'height', 'x', 'y']

  function isNumber(x) {
    return x === +x
  }

  function ok(actual, correct) {
    if (actual !== correct) throw new Error(actual + ' should be ' + correct)
  }

  ok(typeof bounding, 'function')

  if (typeof document == 'undefined') {
    return console.log('Open test.html')
  }

  var body = bounding(document.body)

  ok(props.every(function(side) {
    return isNumber(body[side])
  }), true)

  ok(body.bottom - body.top, body.height)
  ok(body.right - body.left, body.width)

  // Test that returned object isn't frozen
  body.stayWarm = 1
  ok(body.stayWarm, 1)

  console.log('All tests passed =)')
}();
