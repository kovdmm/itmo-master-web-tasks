const mixin = function(){ 
    return this * this; 
};

Number.prototype.qv = mixin;

console.log((5).qv());