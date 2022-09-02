function demChanLe() {
  //Đầu vào: nhập vào 3 số nguyên
  var num_1 = document.getElementById("num_1").value * 1;
  var num_2 = document.getElementById("num_2").value * 1;
  var num_3 = document.getElementById("num_3").value * 1;
  var count = 0;
  var ketQua = ""

  //Xử lý
  if (num_1 % 2 === 0) count++;
  if (num_2 % 2 === 0) count++;
  if (num_3 % 2 === 0) count++;

  ketQua += "<p class='result mb-0'>Có "  + count + " số chẵn" + ", " + (3 - count) + " số lẻ</p>"

  //Đầu ra: xuất ra bao nhiêu số chẵn lẻ
  document.getElementById("showChanLe").innerHTML = ketQua;
}
