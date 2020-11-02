//soal 1
//1.

function calculateAge(birthYear){
	return 2019 - birthYear;
}
 
function yearUntilRetirement(object){
	var age = calculateAge(object.year);
	var retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(object.firstName + ' retires in '+ retirement + ' years');
	} else {
    	console.log(object.firstName + ' is already retired.');
    }
}
console.log(yearUntilRetirement('2001','Virgin'));



//2.


const addNumber = (a, b, c, d, e, f, g) => {
    var numbers = [a, b, c, d, e, f, g];
    var sum = 0;
    for(var i=0;i<numbers.length;i++){
            sum += numbers[i];
         let addNumber = numbers.map();   
    }
}
console.log(i);



//3.
var phi = 3.14;
var power = 2;
var radius = 0;
 
var calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};
 
radius = 21;
var area21 = calculateArea({radius: radius, power: 2 });
 
radius = 7;
var area7 = calculateArea({radius: radius, power: 2 });
 
console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);


//4.
const makeAjaxRequest = (url, method) => {
    if(!method){
           method = ‘GET’;
    }
    console.log(makeAjaxRequest(url, method));    
    }
     
    

//=================================================================================================================//

//soal 2
//1.
const warnaKesukaan = (warna) => `warna kesukaan saya adalah ${warna}`;

console.log(warnaKesukaan('putih'));

//2.
const namaBuah1 = ['apel','mangga'];
const namaBuah2 = ['sirsak','semangka'];

semuaNamaBuah = [...namaBuah1, ...namaBuah2];

console.log(semuaNamaBuah);
