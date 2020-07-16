/*
VARIABLE
    a.declared globally
    b.various datatypes can be included
*/ 
console.log("VARIABLES")
//string
var name="minu";
console.log("name is",name);
//number
var num=23;
console.log("number:",num);
//array
var array=["data","information","files"];
console.log("ARRAY:",array);
//object
var object={
    name:"raj",
    age:23,
    nationality:"india"
}
console.log("OBJECT:",object);
//boolean - true or false
var correct=true;
console.log("THE ANSWER IS THUS:",correct);

/*
LET
    a.functions similar to variable
    b.block level and thus variables are created locally
*/
console.log("-----------------------------------");
console.log("LETS");
{
    let identity="minu";
    console.log(identity);
}

/*
CONSTANT
    a.as name implies remains constant
    b.value cannot be changed once fixed
    c.the index value cant be duplicated as in case of array
    */

console.log("-------------------------------------");
console.log("CONSTANT");
const colors=["blue","black","violet"];
//possibility is can add another colour but cannot replace any colour as like in variable
colors.push("pink");
console.log(colors);