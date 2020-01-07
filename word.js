// require the methods build from the file Letter.js
var letter = require("./Letter");
// create an ARRAY that holds the words the words to be guessed. 
var tvShows = [
"teen wolf", "the vampire dairies", "drakula",
]
// create at function to spil the strings in the arry to individual characters. 

function Word (word) {
 this.letters = word.split("").map(function(char){
     return new letter(char);
 });

}
// export the method
module.exports=tvShows