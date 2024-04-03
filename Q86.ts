// Question86:Checking for text presence:Create a function that checks if the word "JavaScript" is present in a given string. it should return true if found, otherwise false.
// check the text present
function checkString(str:string):boolean{
    return str.includes("JavaScript");
}
console.log(checkString("I love JavaScript"));
