//////////// menu //////////////
var pick; 
var place;

menu = [] 
sides = []
/////////////////input//////


var order = window.prompt("Enter your order, please: ");
alert("What will be your order: " + order);

///////// assigned value ////////////
// entry // sides

entree = { 
    "Nachos": 10.00,
    "Hamburger": 12.00,
    "T-bone Stake": 15.00,
    "Soup": 3.50
}

side = {
    "Rice": 2.00,
    "Corn": 1.00,
    "Bake Potato": 2.00,
    "French Fries": 1:00,
}

/////// loop /////////
for (var key in student) {                  // say for var (always put var or it will be global remember)
    console.log(key + " => " + student[key]); // print key plus (which key and value), then student(bracket notattion) pass in key
                                              //above-brackets then key very important NOT student.key
  }


  var menu = []; // The Menu
 
  for (var key in sides) {                  
      console.log("entre  " + key + " => side" + sides[key]); 
  };
  
 // menu.push(order);
 // menu.pop(order);
  
  
/////// Rule 1 //////////////
// One entre & Two side choices

if ( entree && side1 && side2) {}; 

//// print out ///////
// entire menu /// Suggestions // Price Total 