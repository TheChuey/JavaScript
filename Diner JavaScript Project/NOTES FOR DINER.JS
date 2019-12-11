const sum = function(list1){
    var total = 0;
    for(var i =0; i < list1.length; i++){
        total = total + list1[i];
    }
    return total
};
//////////////// Entries, Values, Keys methods using the Object 
//Object irratible by value, key or entries 
var courseSide_entry = Object.entries(side);
console.log(courseSide);
var courseSide_value = Object.values(side);
console.log(courseSide);
var courseSide_key = Object.keys(side);
console.log(courseSide);

/////////////////////////////////////////////
