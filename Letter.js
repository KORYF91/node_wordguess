// This file will not require any other files.
// make constructor that displays an underscore or a placeholder for the userGuess to be shown. this will show the letter if guessed correctly or just keep the placeholder in the event the userGuess is in correct. 

var placeholder = "_",


function Letter(char){
    this.visable = !/[a-z1-9]/i.test(char);
    this.char = char;
}
Letter.prototype.toStrings = function(){
    if(this.visable === true){
        return this.char
    }
    return "_";
}

// create a function that checks the userGuess against the stored boolean.

var userGuess = false;


function guess(userGuess) {
    if (userGuess.toUppercase() === this.char.toUppercase()){
        this.visable = true
        return true;
    }
    return false;
}

// export the methods built
module.exports=Letter;
