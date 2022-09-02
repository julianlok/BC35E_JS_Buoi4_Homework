function chonThanhVien() {
  //Đầu vào: lựa chọn câu câu trả lời là muốn chào hỏi ai trong số 4 thành viên đã gán giá trị
  var chonThanhVien = document.getElementById("chonThanhVien").value;
  var ketQua = "";

  //Xử lý
  switch (chonThanhVien) {
    case "B":
      ketQua += "<p class='result mb-0'>Xin chào Bố!" + "</p>";
      break;
    case "M":
      ketQua += "<p class='result mb-0'>Xin chào Mẹ!" + "</p>";
      break;
    case "A":
      ketQua += "<p class='result mb-0'>Xin chào Anh trai!" + "</p>";;
      break;
    case "E":
      ketQua += "<p class='result mb-0'>Xin chào Em gái!" + "</p>";;
      break;
  }

  //Đầu ra
  document.getElementById("showLoiChao").innerHTML = ketQua;
}
