// title
// type of heading
// headingGenerator ('Hi there', 1) <h1>Hi there </h1>
/*
const headingGenerator = function(great, number){
    return `<h${number}>${great}</h${number}>`
};

var responce = headingGenerator("hi there", 1)
console.log(responce)
*/

Heading Generator in Javascript

const headingGenerator = (title, typeOfHeading) => {       // create a function heading generator an arrow function and have a title and typeofHeading as args
    return `                                               
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
  }
                                                      // above you want to return a string-place in backticks to be explicit in the type
                                                      // say h (then string literals) use the dollar sign and pass in typeofHeading then the same with title...then close it off with </h and the typeofHeading
  
  headingGenerator('Greetings', 1); // now call the function here  this will return <h1>Greetings</h1>

// https://bottega.devcamp.com/12/guide/1684