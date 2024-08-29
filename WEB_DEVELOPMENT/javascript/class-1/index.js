@@ -1,22 +1,23 @@
// Variable : Variable where we can store data or assign data.
// Constant : Constant where we can store data but can't change the data.
// Keywords : let, var and const.
// let : let is a keyword in JavaScript which is used to declare a variable. It is block
// scope, means it can be accessed only within the block where it is declared. It is
// used to declare a variable which can be reassigned. It is the default variable
// declaration in JavaScript. It is not hoisted like var.
// var : var is a keyword in JavaScript which is used to declare a variable. It is
// function scope, means it can be accessed within the function where it is declared.
// It is used to declare a variable which can be reassigned. It is hoisted like let
// and const.
// const : const is a keyword in JavaScript which is used to declare a constant. It is
// block scope, means it can be accessed only within the block where it is declared.
// It is used to declare a constant which cannot be reassigned.
// let and const are the new variable declarations in JavaScript which are introduced
// in ECMAScript 2015 (ES6) and are used to replace var.

// let and const are used to declare variables in JavaScript. They are used to declare
// variables which can be reassigned. They are block scope, means they can be accessed
// only within the block where they are declared. They are not hoisted like var.
// You can't declare the same variable name further.
// Example : let name = "abc";
// let name = "xyz"; // SyntaxError: Identifier 'name' has already been declared.
// Syntax: a set of rules to write code.
// Javascript is case-sensitive.(a !== A)
// You can't use a keyword as a variable name.
// Camel Case :
// It is a naming convention where the first word is in lower case and the first letter of the
// subsequent words are in upper case.
// Example : myVariableName, myFunctionName.
// Pascal Case :
// It is a naming convention where the first letter of each word is in upper case.
// Example : MyVariableName, MyFunctionName.
// Snake Case :
