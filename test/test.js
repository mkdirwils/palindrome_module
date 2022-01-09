let assert = require("assert");
let Phrase = require("../index");


describe("Phrase", function(){

 describe("#palindrome", function(){

  it("should return false for non-palindrome", function() {
   let nonPalindrome = new Phrase("apple");
   assert(!nonPalindrome.palindrome());
  });
 

  it("should return true for palindrome", function(){
   let plainPalindrome = new Phrase ("racecar");
   assert(plainPalindrome.palindrome());
  });

  it("should return true for mixed-case palindrome", function(){
   let mixedCasePalindrome = new Phrase("Racecar");
   assert(mixedCasePalindrome.palindrome());
  })
  it("should return true for palindrome with punctuation", function(){
   let puntuatedPalindrome = new Phrase("Madam, I'm Adam")
   assert.strictEqual(puntuatedPalindrome.letters(), "MadamImAdam")
   
  })
  
 })
 describe("#letters", function() {
  it("should return only letters", function() {
    let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
    assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
  });
});
});