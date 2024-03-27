// you can create variables and save values inside
let numberA = 10
let numberB = 5
let numberC = numberA + numberB

// you can use console to print out values and text
console.log("Hello E03B")
console.log(numberC)


function showTopics(e){
// Gets the li, search within for ul and toggles the hide class of the ul 
    
    // Going into the li and search for a ul child and save the ul within a variable mySublist
    let mySublist = e.target.querySelector("ul")
  
    // add the class hide to mySublist (ul)
    mySublist.classList.toggle('hide')
}