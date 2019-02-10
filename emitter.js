// Use function constructor so we can build multiple emitters
function Emitter(){
    this.events = {};
}

// Event listener: the code that responds to an event.
// We are listening for and event, 'its a mtaphor really'
// In Javascipt's case, the listener will be a function
// Common to use '.on', it reads well like an sentence
Emitter.prototype.on = function(type, listener){
    // property type is an array
    this.events[type] =  this.events[type] || [];
    this.events[type].push(listener);
}
// We just add listener function to our array of events


// Emit a certain kind of event
// Say something happened
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;