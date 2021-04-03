
//Define a Object constructor
//có thể sử dụng declaration Function or Expression Function 
//để tạo một Object Constructor
function User(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;

    //tạo Expression Function trong constructor
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Tạo Object mới từ constructor định nghĩa phía trên
var athur = new User('Binh', 'Nguyen', 'Bien Hoa');
var member = new User('Loc', 'Nguyen', 'HCM');

//Object Prototype
// Sử dụng add 1 attribute khi một Construction đã được tạo ra
User.prototype.course = 'Javascript'
//Tạo Function cho 1 attribute bằng prototype
User.prototype.className = function(){
    return `${this.course} : ${this.getName()}`
}

//Create new attribute cho Object  
athur.title = 'Tao Khoa hoc Java';
member.comment = 'Comment cua member';

// //call function getName()
// console.log(athur.className());
// console.log(member.className())


//Đối tượng Date
//tạo 1 đối tượng date
var date = new Date();

//cách lấy time chi tiết ra
var year = date.getFullYear();// lấy year
var month = date.getMonth() + 1;// lấy month default return 0-11, vì vậy phải + 1 để đúng month thực tế
var day = date.getDate();// lấy day
var hour = date.getHours();// lấy Hours
var minute = date.getMinutes();// lấy minute
var second = date.getSeconds(); //lấy seconds

console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minute)
console.log(second)

console.log(`0${day}/0${month}/${year} HAPPY NEW YEAR`)

