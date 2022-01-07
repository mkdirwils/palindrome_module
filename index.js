module.exports = Phrase


// Adds reverse to all strings
function reverse(content) {
 return Array.from(content).reverse().join("");
}

// Define a Phrase Object 
function Phrase(content){
 this.content = content;

 // returns content processed for palindrome
 this.processedContent = function processedContent() {
  return this.content.toLowerCase();
 }

 // return true if the phrase is a plaindrome and false if otherwise
 this.palindrome = function palindrome() {
  return this.processedContent === reverse(this.processedContent);
 }
}

