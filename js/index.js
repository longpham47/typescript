// let fullName = "nguyển văn A";
// let age = "18";
/**
 * kiểu dữ liệu (type)
 *
 *
 */
//keiẻu dữ liệu cơ bản 
let fullName = "nguyễn văn A ";
let fullName2 = 'nguyễn văn A';
let age2 = 20;
// age = "123"
let isLogin = true;
let local = null;
let property = undefined;
let nv = {
    ma: 1,
    hoTen: "nhanvien",
    luong: 1000,
};
let result = "dml;ad;lad";
let prod = {
    id: 1, ten: "sampham1", price: 1000, img: "https://i.pravatar.cc/", moTa: "jkacnknckz"
};
let btn = { id: "btn01", className: "tesk", innerHTML: "click", gradient: "color" };
class Phim {
    // calss implaemnt thì mới chứa code xữ lý
    create(newItem) {
        return 123;
    }
    ;
}
//?  unknown : kiểu dữ liệu unknown
// type của funtion
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
tinhTong(2, 9);
// kôgn có retun void
let showInfo = (name) => {
    console.log(`hello ${name}`);
};
showInfo("name");
let main = (callback) => {
    // truyềngiá trị name vào 1 hàm callback
    callback("hello TS"); // gọi hàm renderH1
};
let renderH1 = (name) => {
    console.log(`hello ${name}`);
};
main(renderH1);
//! KIỂU CỦA MẢNG
let arrNumber = [1, 2, 3];
let arrString = ["a", "d"];
let arrPro = [
    { id: 1, ten: "sampham1", price: 1000, img: "https://i.pravatar.cc/", moTa: "jkacnknckz" }
];
//!tuple : dữ liệu mảng hôn hợp
let sv = [1, "sinh viên",];
/**
 * clsss
 */
class ProductTyple {
    constructor() {
        this.id = "";
        this.name = " ";
        this.img = "";
    }
    showInfo() {
        console.log(this.name);
    }
}
let prod1 = new ProductTyple();
prod1.id = "sp001";
prod1.name = "sp1";
prod1.img = "sp01";
prod1.showInfo();
//! any : cho phép dùng câcs toán tử (+-*/) và gọi hàm 
// let prod2:any = undefined;
// prod2.showInfo()
let prod3 = undefined;
// prod3.showInfo();
//! instanceof :  kiểm tra có phải là thể hiện clas không ?
if (prod3 instanceof ProductTyple) {
    prod3.showInfo();
}
let prod4 = undefined;
// prod4++;
//!typeof : kiểm tra dữ liệu
if (typeof prod4 == "number") {
    prod4++;
}
/**
 *! access modifìer : tính đóng gói
+ PUpidlic: có thể truy cập ở mọi nơi (instance , kế thưuà , trong classs)
+ private : chỉ dược dùng trong class đó ( ko dùng dược instance ,kế thùa  )
+protected : chỉ dung được tỏng class đó và lớp con kế thùa (ko dung đưuọc istance)
 */
class NhanVien {
    constructor() {
        this.ma = "";
        this.ten = "";
        this.luongCB = 1000;
        this.heSo = 1;
    }
    tinhLuong() {
        return this.luongCB * this.heSo;
    }
}
class NhanVienKeToan extends NhanVien {
    tinhLuong() {
        return this.luongCB * this.heSo;
    }
}
let nv2 = new NhanVien();
nv2.ma = 123;
nv2.ten = "nguyenc văn A";
// nv2.luongCB = 50000;
console.log(nv2.tinhLuong());
//! Generic
/**
 *
 */
class List {
    constructor() {
        // truyền dữ liệu đọng 
        this.data = [];
    }
    create(newItem) {
        this.data.push(newItem);
    }
    getByID(id) {
        return this.data.find((item) => item.id == id);
    }
}
let userList = new List();
let user = { id: "user1", username: "test", password: "654356" };
userList.create(user);
console.log(userList);
