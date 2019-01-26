# node-red-bticino-myhome
Control Bticino MyHome components from NodeRED.

The default values are in such a way that they play nice with Home Aisstant's MQTT components, which is basically the intended use case for this nodes.

MyHome Gateway <--> NodeRed <--> MQTT <--> Home Assistant

Node that are working:

* Lights
  * ON/OFF
  * Dimming (providing a fixed percentage)
  
* Switches
  * ON/OFF
  
* Covers
  * UP/DOWN/STOP
  * Tilt (comming soon)
  * Positions (comming soon)

* Debug
  * Listen for any message on the bus and sends it as payload

* Command Session
  * Send arbitray message provided in payload to bus. E.g. *#1*67## to turn on light 6.7
