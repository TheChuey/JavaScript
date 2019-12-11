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
    "French Fries": 1.00
}

const sum = function(value1, value2, value3){
    var total = value1 + value2 + value3;
    return total
};

var menu = entree; 
var x = 2; // selection of key and values of side

const output = function(x, menu) { 
    var courseSide_key = Object.keys(menu)[x];
    console.log("Side One: ", courseSide_key);

    var courseEntree_value = Object.values(menu)[x];
    console.log("price $ ", courseEntree_value);
    
    value = courseEntree_value;
   // console.log(value);
    return value
}
value1 = output (x, menu);
value2 = output (0, side);
value3 = output (1, side);
console.log(sum(value1, value2, value3));







