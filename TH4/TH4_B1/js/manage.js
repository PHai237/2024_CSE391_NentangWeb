document.getElementById("qlsv").addEventListener("submit", function(event){
    event.preventDefault();

    const hoTen = document.getElementById("name").value.trim();
    const maSV = document.getElementById("msv").value.trim();
    const ngaySinh = document.getElementById("date").value.trim();
    const lop = document.getElementById("class").value.trim();

    if(!hoTen || !maSV || !ngaySinh || !lop){
        alert("Vui lòng điền thông tin!")
        return;
    }

    const dsSV = JSON.parse(localStorage.getItem("qlsv")) || [];

    if(maSV <= 0){
        alert("Mã sinh viên không được là số âm!");
        return;
    }

    const existS = qlsv.findIndex(sv => sv.msv === maSV);
    if(existS > 0){
        alert("Mã sinh viên này đã tồn tại!");
        return;
    }

    dsSV.push({hoTen, maSV, ngaySinh, lop});
});