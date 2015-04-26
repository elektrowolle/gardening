//require("Pump.js");
//Type Node.js Here :)


var Pump = function(pin){
    this._pump      = {};
    this._pumpPin   = pin;
    this.isRunning  = true;
	
	this.init();
}
Pump.type = "actor";

Pump.prototype.init = function(){
    this.mraa = require('mraa'); //require mraa
    console.log('MRAA Version: ' + this.mraa.getVersion()); //write the mraa version to the Intel XDK console
    
    this._pump = new this.mraa.Gpio(this._pumpPin);   
};

Pump.prototype.start = function(){
    console.log("start pump");
    this._pump.write(1);
};

Pump.prototype.stop = function(){
    console.log("stop pump");
    this._pump.write(0);
};

Pump.prototype.get = function(){
    var _self = this;
    return {
        "pump":
        {"running": _self.isRunning}
    };
};


module.exports = Pump;