const hoTen = prompt('Nhập họ và tên của bạn: ');
const gioiTinh = prompt('Nhập giới tính của bạn (Nam hoặc Nữ): ');


const hoTenArr = hoTen.split(" ");
const ho = hoTenArr[0];
const tenDem = hoTenArr.slice(1, -1).join(" ");
const ten = hoTenArr[hoTenArr.length - 1];


let tenDemMoi;
if (gioiTinh === "Nam") {
  tenDemMoi = "Văn";
} else if (gioiTinh === "Nữ") {
  tenDemMoi = "Ngọc";
} else {
  tenDemMoi = tenDem;
}


document.write("Họ: " + ho);
document.write(". Tên đệm: " + tenDem);
document.write(". Tên: " + ten);

// In ra kết quả tên mới
const tenMoi = ho + tenDemMoi + ten ;
document.write(". Tên mới: " + tenMoi);
