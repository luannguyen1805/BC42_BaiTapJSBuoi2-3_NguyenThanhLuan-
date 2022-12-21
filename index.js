// Bài tập 1: Tính lương Nhân Viên
let tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function () {
    let luongNgay = +document.getElementById("luongNgay").value;
    let ngayLam = +document.getElementById("ngayLam").value;
    let tinhLuong = luongNgay * ngayLam;
    document.getElementById("result-bai1").value = new Intl.NumberFormat('vn-VN').format(tinhLuong) + "VNĐ";
}

// Bài tập 2: Tính giá trị trung bình
document.getElementById("tinhTB").onclick = function () {
    let so1 = +document.getElementById("so1").value;
    let so2 = +document.getElementById("so2").value;
    let so3 = +document.getElementById("so3").value;
    let so4 = +document.getElementById("so4").value;
    let so5 = +document.getElementById("so5").value;
    let soTB = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById("result-bai2").value = soTB;
}
document.getElementById("reset").onclick = function () {
    document.getElementById("so1").value = '';
    document.getElementById("so2").value = '';
    document.getElementById("so3").value = '';
    document.getElementById("so4").value = '';
    document.getElementById("so5").value = '';
    document.getElementById("result-bai2").value = '';
}

// Bài tập 3: Quy đổi tiền
document.getElementById("quyDoiTien").onclick = function () {
    let giaUSD = 23500;
    let soTien = +document.getElementById("soTien").value;
    let tienVND = giaUSD * soTien;
    document.getElementById("result-bai3").value = new Intl.NumberFormat('vn-VN').format(tienVND) + "VNĐ";
}

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById("tinhCVDT").onclick = function () {
    let chieuDai = +document.getElementById("chieuDai").value;
    let chieuRong = +document.getElementById("chieuRong").value;
    let chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = chieuDai * chieuRong;
    document.getElementById("result-bai4").value = "Chu vi: " + chuVi + "; Diện tích: " + dienTich;
}

// Bài tập 5: Tính tổng 2 ký số
document.getElementById("tinh2so").onclick = function () {
    let num = +document.getElementById("num").value;
    let firstNum = Math.floor(num / 10);
    let lastNum = num % 10;
    let result = firstNum + lastNum;
    document.getElementById("result-bai5").value = result;
}

// button

let btnBai1 = document.getElementById("btnBai1");
let btnBai2 = document.getElementById("btnBai2");
let btnBai3 = document.getElementById("btnBai3");
let btnBai4 = document.getElementById("btnBai4");
let btnBai5 = document.getElementById("btnBai5");
let bai1 = document.getElementById("bai1");
let bai2 = document.getElementById("bai2");
let bai3 = document.getElementById("bai3");
let bai4 = document.getElementById("bai4");
let bai5 = document.getElementById("bai5");

btnBai1.onclick = function () {
    if (bai1.style.display = "none") {
        bai1.style.display = "block";
        bai2.style.display = "none";
        bai3.style.display = "none";
        bai4.style.display = "none";
        bai5.style.display = "none";
    }
}
btnBai2.onclick = function () {
    if (bai2.style.display = "none") {
        bai2.style.display = "block";
        bai1.style.display = "none";
        bai3.style.display = "none";
        bai4.style.display = "none";
        bai5.style.display = "none";
    }
}
btnBai3.onclick = function () {
    if (bai3.style.display = "none") {
        bai3.style.display = "block";
        bai2.style.display = "none";
        bai1.style.display = "none";
        bai4.style.display = "none";
        bai5.style.display = "none";
    }
}
btnBai4.onclick = function () {
    if (bai4.style.display = "none") {
        bai4.style.display = "block";
        bai2.style.display = "none";
        bai3.style.display = "none";
        bai1.style.display = "none";
        bai5.style.display = "none";
    }
}
btnBai5.onclick = function () {
    if (bai5.style.display = "none") {
        bai5.style.display = "block";
        bai2.style.display = "none";
        bai3.style.display = "none";
        bai4.style.display = "none";
        bai1.style.display = "none";
    }
}



