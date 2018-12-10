'use strict'

// When using context isolation, the WebViewElement has to be defined in main
// world to be able to be registered.
module.exports =
class WebViewElement extends HTMLElement {
  constructor () {
    super()
    this.initialize()
  }
}
