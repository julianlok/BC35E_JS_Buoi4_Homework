function doanTamGiac () {
    //Đầu vào
    var doDaiCanh1 = document.getElementById('doDaiCanh1').value * 1;
    var doDaiCanh2 = document.getElementById('doDaiCanh2').value * 1;
    var doDaiCanh3 = document.getElementById('doDaiCanh3').value * 1;
    var ketQua = "";

    //Xử lý
    if (doDaiCanh1 === doDaiCanh2 && doDaiCanh2 === doDaiCanh3) {
        ketQua += "<p class='result mb-0'>Hình tam giác đều</p>";
    }else if (doDaiCanh1 === doDaiCanh2 || doDaiCanh1 === doDaiCanh3 || doDaiCanh2 === doDaiCanh3) {
        ketQua += "<p class='result mb-0'>Hình tam giác cân</p>";
    }else if (doDaiCanh1 * doDaiCanh1 === (doDaiCanh2 * doDaiCanh2) + (doDaiCanh3 * doDaiCanh3) || doDaiCanh2 * doDaiCanh2 === (doDaiCanh1 * doDaiCanh1) + (doDaiCanh3 * doDaiCanh3) || doDaiCanh3 * doDaiCanh3 === (doDaiCanh1 * doDaiCanh1) + (doDaiCanh2 * doDaiCanh2)) {
        ketQua += "<p class='result mb-0'>Hình tam giác vuông</p>";
    }else {
        ketQua += "<p class='result mb-0'>Một loại tam giác nào đó</p>";
    }

    //Đầu ra
    document.getElementById('showTamGiac').innerHTML = ketQua;
}