var exports = module.exports = {}


exports.execute_command = function(command, config, success, error) {
  let net = require('net');

  const ACK  = '*#*1##'
  const NACK = '*#*0##'
  const START_COMMAND = '*99*9##'

  var client = new net.Socket(),
      state = 'disconnected'

  client.on('error', function() {
    console.error("Command socket error")
    state = 'disconnected'
    client.destroy();
    error(command);
  })

  client.connect(config.port, config.host, function() {
    // opening command session
  })

  client.on('data', function(data) {
    var sdata = data.toString()

    if(sdata === NACK) {
      // calling callback
      error(sdata, command)
    } else {
      if(state == 'disconnected') {
        state = 'logged-in'
        client.write(START_COMMAND)
        return
      }
      if(state == 'logged-in') {
        state = 'open'
        client.write(command)
        return
      }
      // calling callback
      success(sdata, command)
    }
    client.destroy()
    return
  })

  client.on('close', function() {
    // to verify that no connections are left open
    return
  })
}
