
module.exports = function(RED) {
  let myhome = require('./myhome-utils');

  function MyHomeDebugNode(config) {
    RED.nodes.createNode(this,config);

    var node = this,
        gateway = RED.nodes.getNode(config.gateway)


    this.on('input', function(msg) {
      var mhengine = new myhome.engine(gateway)
      mhengine.sendCommand({
        command:msg.payload,
        stopon: ['*#*1##', '*#*0##'],
        done: function(pkt,i) {
          var m = pkt.match(/\*#\*(\d)##/);
          var successFail = m[1];
        }
      });
    });
    this.on("close", function() {
      console.log('debug end called')
                // Called when the node is shutdown - eg on redeploy.
                // Allows ports to be closed, connections dropped etc.
                // eg: node.client.disconnect();
    });
  }
  RED.nodes.registerType("myhome-debug", MyHomeDebugNode);
}
