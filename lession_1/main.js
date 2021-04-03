// var a = 1;
// var b = 2;
// var c = 2.5;

// var fullName = 'Binh';

// var input = String;
// function run(input){
//     var output;
    
//     if (typeof(intput) !== 'string'){
//         output = true;
//     }

//     return output
// }

// console.log(!!1);
// console.log(!!['Mac']);
// console.log(!!{myName: 'Binh'});
// console.log(Boolean(1));

// console.log(!!false) // false
// console.log(!!0) // false
// console.log(!!'') // false
// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!NaN) // false

function stringInString(needle, haystack) { 
    if(typeof needle == 'string' && typeof haystack == 'string' && haystack.includes(needle)){
        return true;
    } else {
        return false
    }
}

console.log(stringInString('1', 'undefined 1'))