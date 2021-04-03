var firstName = 'Binh';
var lastName = 'Nguyen';
// var text = 'Helping developers and technologists write the script of the future. Our public platform serves 100 million people every month, making it one of the 50 most popular websites in the world. Our asynchronous knowledge management and collaboration offering Stack Overflow for Teams, is transforming how people work';

// khai niem Template String ES6
// console.log(`Toi la: ${firstName} ${lastName}`);


//new session
// var commentText = 'Để Hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu \\ vào trước hoặc sau nó';
// console.log(commentText);

// var textLength = commentText.length;
// console.log(textLength);
var commentText = 'Hi';
function run(commentText) {
    var textLength = commentText;
    return textLength.length;
}

var title = 'Học Javascript tại F8';
function run(title) {
    var language = title.slice(4,14);
    var rest = title.slice(15);
    return `Language is ${language} and rest is ${rest}`;
}

function run(number) {
    var result = false;
    if(number >= 1) {
        result = true;
    }

    return result;
}

var anArray = [
    'PHP',
    'Java',
    '1',
    '2'
]
function run(anArray) {

    if(anArray.length < 3){
        anArray.shift();
    } else if (anArray.length > 2){
        anArray.pop()
        anArray.pop()
    }

    return anArray;
}

var animals = [
    '1',
    '2',
    '3'
]
function run(animals) {

    if(animals.length == []){
        animals.push('Cat', 'Mouse')
    } else if (animals.length == 1){
        animals.unshift('Elephant')
    } else if (animals.length > 2) {
        animals.splice(1, 1, 'Monkey', 'Tiger')
    }

    return animals;
}
console.log(run(animals))

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

