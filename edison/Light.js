//require("Pump.js");
//Type Node.js Here :)


var Light = function(pin){
    this._light     = {};
    this._lightPin  = pin;
    this.isRunning  = true;
	
	this.init();
}
Light.type = "actor";

Light.prototype.init = function(){
    this.mraa = require('mraa'); //require mraa
    console.log('MRAA Version: ' + this.mraa.getVersion()); //write the mraa version to the Intel XDK console
    
    this._light = new this.mraa.Gpio(this._lightPin);   
};

Light.prototype.start = function(){
    console.log("start light");
    this._light.write(1);
};

Light.prototype.stop = function(){
    console.log("stop light");
    this._light.write(0);
};

Light.prototype.get = function(){
    var _self = this;
    return {
        "light":
        {"running": _self.isRunning}
    };
};


module.exports = Light;