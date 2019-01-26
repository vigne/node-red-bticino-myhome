module.exports = function(RED) {
  let net = require('net')
  let mhutils = require('./myhome-utils')

  function MyHomeCommandSessionNode(config) {
    RED.nodes.createNode(this, config)
    var node = this,
        state = 'disconnected'

    node.on('input', function(msg) {
      mhutils.execute_command(msg.payload, RED.nodes.getNode(config.gateway),
      function(data, command) {
//        node.log(command + ' successfully executed')
      },
      function(data, command) {
        node.error(command + ' failed')
        msg.payload = false
        node.send(msg)
      })
    })
  }
  RED.nodes.registerType("myhome-commandsession", MyHomeCommandSessionNode);
}
