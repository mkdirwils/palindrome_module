function reverse(content) {
 return Array.from(content).reverse().join("")
}


function palindrome(content) {
 this.content = content;

 let processedContent = this.content.toLowerCase()
 return processedContent === reverse(processedContent)

}