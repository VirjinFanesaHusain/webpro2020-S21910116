//Arrow Function

/*function expression 
const = function calcAge(year){
    return 2020 - year;
}
*/
console.log(calcAge(2001));

/*menggunaakn arrow function
const = (year) => {
    return 2020 - year;
}

console.log(calcAge(2001));
*/


/*no argument
const calcAge = () => {
    return 2020 - 1992;
};

console.log(calcAge());
//no argument with 
const calcAge = () => 2020 - 1992;

console.log(calcAge());



const year = [1990, 1992, 1993, 2001];

conts calcAge5 = years.map(function(el){
    return 2020 - el;
});


//
conts calcAge6 = years.map((el) => 2020 - el);
   console.log(calcAge6); */

//default parameter
const calcAge = (birthdayYear, currentYear = 2020) => currentYear-birthdayYear

console.log(calcAge(1991,2001));