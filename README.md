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
