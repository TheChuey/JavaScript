BIND FUNCTION

//bind function

const userOne = {                                                                             //user object
    firstName: "Kristine",                                                                   //has a first name
    lastName: "Hudgens"                                                                 //has a last name
  };
  
  const userTwo = {                                                                           //user object
    firstName: "Tiffany",
    lastName: "Hudgens"
  };
                                                                                                              // Function expression-anonymouse function stored in a variable
  const fullName = function() {                                                      //fullName set equal to function        
    return `${this.lastName}, ${this.firstName}`;                       //string literal syntax (backticks)
  };
  
  ////Nope!-can't use arrow function because returns undefined
  ////expression vs arrow-the arrow changes the way it works-references the single function not what is bound to it
  //// const fullName = () => {
  ////   return `${this.lastName}, ${this.firstName}`;
  //// };

                                                                                                            //JS allows you to connect a function with an object below
  const kristine = fullName.bind(userOne);                             //variable kristine-cal the function fullName then bind userOne
  const tiffany = fullName.bind(userTwo);                                //same as above
  
  kristine();
  tiffany();

  // created 2 user objects
  // now created a function expression(anon function stored in a variable)
  // inside it return with string literal syntax last name and first name
  // (what we want to inject and bind the function and the objects together now--call this and have it reference our object)
  // now say const and variable kristine equal to fullname bind and pass in userOne( and do the same for userTwo) 
  // call kristine() and it will return/print out Hudgens, Kristine 
Gravatar for marineepo@gmail.com
Benjamin NicklausDecember 5th 2019 12:44:35 pm
How to Check if two objects have Equal Values


//fucntion to test if values of 2 objects are equal
//below function works for shallow conidtionals-one level-name age and value is a string example---it won't work if it has other data structurs


const isEqual = (obj1, obj2) => {        //arrow function--- const isequal is equal to obj 1 and obj 2  
    const obj1Keys = Object.keys(obj1);  //grabbing keys set it equal to Object class keys then pass in the obj1
    const obj2Keys = Object.keys(obj2);  //grabbing keys set it equal to Object class keys then pass in the obj2
  
    if (obj1Keys.length !== obj2Keys.length) {  //test--conditional-check for same number of keys-if  obj1keys length isn't equal to obj2keys length
      return false;                             //  return false
    }
    //now check the values
    for (let objKey of obj1Keys) {           //for of loop- let variable-objkey of obj1keys (now loop over)
      if (obj1[objKey] !== obj2[objKey]) {   // conditonal here- if obj1(pass in key name) is not equal to obj2 and obj2 key 
        return false;                        // return false
      }
    }
  
    return true;                             //if passes both test return true
  };
  
  const obj1 = {           
    name: "Kristine", //keys below
    age: 13,
    favorites: {      //nested object
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  const obj2 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  obj1 == obj2;        //object 1 is equal to obj 2---this wouldn't work correctly
  isEqual(obj1, obj2); //function called isEqual and takes 2 objects---this is the right way