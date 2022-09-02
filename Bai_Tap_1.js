function sapXep() {
    
  //Đầu vào: người dùng nhập 3 số nguyên (number)
  var number_1 = document.getElementById("number_1").value * 1;
  var number_2 = document.getElementById("number_2").value * 1;
  var number_3 = document.getElementById("number_3").value * 1;
  var ketQua = "";

  //Xử lý
  if (number_1 > number_2 && number_2 > number_3) {
    ketQua = "<p class='result mb-0'>" + number_3 + ' < ' + number_2 + ' < ' + number_1 + "</p>";
  } else if (number_1 > number_3 && number_3 > number_2) {
    ketQua = "<p class='result mb-0'>" + number_2 + ' < ' + number_3 + ' < ' + number_1 + "</p>";
  } else if (number_2 > number_1 && number_1 > number_3) {
    ketQua = "<p class='result mb-0'>" + number_3 + ' < ' + number_1 + ' < ' + number_2 + "</p>";
  } else if (number_2 > number_3 && number_3 > number_1) {
    ketQua = "<p class='result mb-0'>" + number_1 + ' < ' + number_3 + ' < ' + number_2 + "</p>";
  } else if (number_3 > number_1 && number_1 > number_2) {
    ketQua = "<p class='result mb-0'>" + number_2 + ' < ' + number_1 + ' < ' + number_3 + "</p>";
  } else {
    ketQua = "<p class='result mb-0'>" + number_1 + ' < ' + number_2 + ' < ' + number_3 + "</p>";
  }
  //Đầu ra: xuất 3 số theo thứ tự tăng 
  document.getElementById("showSapXep").innerHTML = ketQua;
}
