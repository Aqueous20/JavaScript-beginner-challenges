/**Return the sum of two numbers 
 * create a function that takes two arguments as functions and return thier sum
 * addition(3,2) --> 5
 * addition(-3,-6) --> -9
 * addition(7,3) --> 10
*/

function addition(num1,num2){
     return num1 + num2 ;
    
}

console.log(addition(3,2));



/**Convert Hours into Seconds 
 * create a function that converts hours into seconds
 * hoursIntoSeconds(2) --> 7200
 * hoursIntoSeconds(10) --> 36000
 * hoursIntoSeconds(24) --> 86400
*/

function hoursIntoSeconds(hours){
    return hours * 60 * 60
}

console.log(hoursIntoSeconds(24))


/**Calculate the perimeter of a rectangle
 * create a function that takes lenght and width of a rectangle and return its perimeter
 * calcPerimeter(6,7) --> 26
 * calcPerimeter(20,10) --> 60
 * calcPerimeter(2,9) --> 22
 */

function calcPerimeter(lenght, width){
    return 2 * (lenght + width)
}
console.log(calcPerimeter(20, 10))

/**Calculate the area of a triangle
 * write a function that takes the base and height of a triangle and return its area
 * calcTriangleArea(3,2) --> 3
 * calcTriangleArea(10,10) --> 50
 * calcTriangleArea(20,20) --> 200
 */

function calcTriangleArea(base, height){
    return (0.5 * base * height)
}
console.log(calcTriangleArea(20, 20))

/**Extend a string 
 * write a function accepts a string and adds 'Frontend' onto the end of it
 * appendFrontend('Apple') --> AppleFrontend
 * appendFrontend('Banana') --> BananaFrontend
 * appendFrontend('Orange') --> OrangeFrontend
*/

function appendFrontend(fruit){
    return fruit + 'Frontend'
}
console.log(appendFrontend('Apple'))

/**Greater than 100
 * given two numbers return true if the sum of both numbers is greater than 100 otherwise return false
 * sumGreaterThan100(20,10) --> false
 * sumGreaterThan100(50,60) --> true
 * sumGreaterThan100(100,-50) --> false
*/
//first version
// function sumGreaterThan100(num1, num2){
//     if (num1 + num2 > 100){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//Toptech version

function sumGreaterThan100(num1, num2){
    return num1 + num2 > 100
}

console.log(sumGreaterThan100(100,-50))

/**Less than or equal to zero
 * write a function that accepts a number and returns true if it is less than or equal to zero otherwise return false
 * lessThanOrEqualToZero(3) --> false
 * lessThanOrEqualToZero(0) --> true
 * lessThanOrEqualToZero(-2) --> true
*/

function lessThanOrEqualToZero(num1){
    return num1 <= 0
}
console.log(lessThanOrEqualToZero(-2))

/**Opposite boolean
 * given a boolean (true or false) return the opposite boolean
 * oppositeBoolean(true) --> false
 * oppositeBoolean(false) --> true
*/

// long way
// function oppositeBoolean(boolean){
//     if (boolean === true) {
//         return false
//     }
//     return true
// }
//toptech version
function oppositeBoolean(boolean){
    return !boolean
}
console.log(oppositeBoolean(true))

/**Is not the number 0
 * Given any elemen return true if it is not the number zero
 * isNotZero(5) --> true
 * isNotZero(0) --> false
 * isNotZero(null) --> true
*/

function isNotZero(ele) {
    return ele !== 0
}
console.log(isNotZero(5))

/**calculate the remainder
 * given two numbers return their remainder when divided by each other.
 * calcRemainder(4,2) --> 0
 * calcRemainder(7,8) --> 7
 * calcRemainder(9,8) --> 1
*/

function calcRemainder(num1, num2){
    return num1 % num2
}
console.log(calcRemainder(9, 8))

/**Is the number odd
 * given two numbers return true if the number is odd
 * isOdd(1)
 * isOdd(2)
 * isOdd(3)
*/
function isOdd(num1){
    return num1 % 2 !== 0
}
console.log(isOdd(4))

/**If a number is even return 1 otherwise return -1
 * create a function that takes a number argument and returns 1 if the number is even if the number is odd return -1
 * booleanInteger(1) --> -1
 * booleanInteger(2) --> 1
 * booleanInteger(5) --> -1
*/
//lomg way
// function booleanInteger(num1){
//     if (num1 % 2 === 0){
//         return +true
//     }
//     return -1
// }
//Top Tech Version
function booleanInteger(num1) {
    return num1 % 2 === 0 ? 1 : -1 ;
}
console.log(booleanInteger(5))

/**Check if the user is logged in and subscribed
 * create a function that takes in two strings if the first string is equal to `LOGGED_IN` and the second string is equal to `SUBSRIBED` return true otherwise return false
 * isLoggedInAndSubscribed(`LOGGED_IN`, `SUBSCRIBED`) --> true
 * isLoggedInAndSubscribed(`LOGGED_IN`, `UNSUBSCRIBED`) --> false
 * isLoggedInAndSubscribed(`LOGGED_OUT`, `SUBSCRIBED`) --> true
*/
function isLoggedInAndSubscribed(element1, element2){
    return element1 === "LOGGED_IN" && element2 === "SUBSCRIBED" 
}
console.log(isLoggedInAndSubscribed('LOGGED_IN', `SUBSCRIBED`))

/**check if a user is logged in or subscribed
 * create a function that takes in two strings. if the first string is equal to "LOGGED_IN" or the second string is equal to "SUBSCRIBED" return true otherwise return false
 * isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED") --> true
 * isLoggedInORSubscribed("LOGGED_IN", "UNSUBSCRIBED") --> true
 * isLoggedInORSubscribed("LOGGED_OUT", "UNSUBSCRIBED") --> false
*/
function isLoggedInOrSubscribed(element1, element2){
    return element1 === "LOGGED_IN" || element2 === "SUBSCRIBED" 
}
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"))






