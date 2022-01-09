module.exports = Phrase


// Adds reverse to all strings
function reverse(content) {
 return Array.from(content).reverse().join("");
}

// Define a Phrase Object 
function Phrase(content){
 this.content = content;


 // returns content for letters 
 this.letters = function letters() {
  // this uses functional programming (filter)
  // return Array.from(this.content).filter(character=>character.match(/[a-zA-Z]/i)).join("")


  // another approach using regexes' global g 
  return (this.content.match(/[a-zA-Z]/gi) || []).join("");

  // // Imperative method
  // const RegEx = /[a-zA-Z]/i;
  // let theLetters = [];
  // Array.from(this.content).forEach(function(character){
  //  if(character.match(RegEx)){
  //   theLetters.push(character)
  //  }
  // })
  // return theLetters.join("")
 }

 // returns content processed for palindrome
 this.processedContent = function processedContent() {
  return this.letters().toLowerCase();
  
 }

 // return true if the phrase is a plaindrome and false if otherwise
 this.palindrome = function palindrome() {
  return this.processedContent() === reverse(this.processedContent());
 }
}

