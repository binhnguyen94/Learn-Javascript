/**
 * KHI NÀO SỬ DỤNG IF VÀ SWITCH?
 * - Khi chỉ có 2 điều kiện đứng or sai thì sử dụng IF
 * - Khi có nhiều Trường Hợp khác nhau thì sẽ sử dụng SWITCH
 * 
 */



/**************************************/
// Câu lệnh rẽ nhánh if
var value = 10;
var date = 6;

// if(value < 10) {
//     console.log('Từ ngày 1 - 9');
// } else if(value < 19) {
//     console.log('Từ ngày 10 - 19') 
// } else if(value >= 20) {
//     console.log('Từ ngày 20 - 30')
// }

/**************************************/
//Câu lệnh rẽ nhãnh Switch
// xử lý nhiều Case khác nhau
switch(date){
    case 2:
        console.log('Ngày Thứ 2');
        break; // break để dừng lại và thoát ra. Nếu ko có break thì sẽ chạy luôn các Case phía dưới
    case 3:
        console.log('Ngày Thứ 3');
        break;
    //Có thể viết thẹo dạng bên dưới
    case 4:
    case 5:
    case 6:
        console.log('Ngày Thứ 4, 5, 6');
        break
    //Nếu các Case ko có trong yêu cầu thì sử dụng Default
    default: 
        console.log('Không Biết')
}