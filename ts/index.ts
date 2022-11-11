// let fullName = "nguyển văn A";
// let age = "18";

/**
 * kiểu dữ liệu (type) 
 * 
 * 
 */

//keiẻu dữ liệu cơ bản 
let fullName: string = "nguyễn văn A ";
let fullName2: string = 'nguyễn văn A';
let age2: number = 20;

// age = "123"

let isLogin: boolean = true;

let local: null = null;

let property: undefined = undefined;

// kiểu dữ liệu tham chiếu : obj , array , funtion
//? object 
// class 

//! type : định nghĩa kiểu dữ liệu cho đói tượng 
type Employee = {
    ma: number,
    hoTen: string,
    luong: number,
    moTa?: string,//!      (?) : optional properties
}
let nv: Employee = {
    ma: 1,
    hoTen: "nhanvien",
    luong: 1000,


}

//! untion Typets : quy điịnh nhiều kiểu dữ liệu cho 1 biến

type responeBE = string | number | boolean | undefined;

let result: responeBE = "dml;ad;lad";

/**
 * ! interface 
 *            : gần giống type 
 */
interface Product {
    id: number | string,
    ten: string,
    price: number,
    img: string,

}


//! gộp interface 
// chỉ dùng để khai báo các thuộc tính optional
interface Product { moTa?: string, }


let prod: Product = {
    id: 1, ten: "sampham1", price: 1000, img: "https://i.pravatar.cc/", moTa: "jkacnknckz"
}

//! kế thừa interface 

interface Button {
    id: number | string,
    className: string,
    innerHTML: string,
}

interface ButtonGradient extends Button {
    gradient: string,

}

let btn: ButtonGradient = { id: "btn01", className: "tesk", innerHTML: "click", gradient: "color" };

// quy định kiểu dữ liểu  cho lớp đối tượng ( class)

//!  CRUD
interface CRUD {
    // phương thức 
    // interface chỉ khai tên thuộc tính ,phương thức (khong chứa code thực thi)
    create: any;
    update: any;
    read: any;
    delete: any;
}

class Phim implements CRUD {
    // calss implaemnt thì mới chứa code xữ lý

    create(newItem: any): number {
        return 123;
    };
    update: any;
    read: any;
    delete: any;
    //any :ko có kiểu dữ liệu (điền kiểu dữ liệu nào cung dược)
}

//?  unknown : kiểu dữ liệu unknown

// type của funtion
let tinhTong = (num1: number, num2: number): number => {
    return num1 + num2;

}

tinhTong(2, 9);



// kôgn có retun void
let showInfo = (name: string): void => {
    console.log(`hello ${name}`);
}
showInfo("name");


let main = (callback: (name: string) => void) => {
    // truyềngiá trị name vào 1 hàm callback
    callback("hello TS"); // gọi hàm renderH1
}

let renderH1 = (name: string): void => {
    console.log(`hello ${name}`);
}

main(renderH1);


//! KIỂU CỦA MẢNG

let arrNumber: number[] = [1, 2, 3];
let arrString: string[] = ["a", "d"];

let arrPro: Product[] = [
    { id: 1, ten: "sampham1", price: 1000, img: "https://i.pravatar.cc/", moTa: "jkacnknckz" }
];

//!tuple : dữ liệu mảng hôn hợp

let sv: [number, string] = [1, "sinh viên",]
/**
 * clsss 
 */
class ProductTyple {
    id: string = "";
    name: string = " ";
    img: string = "";
    showInfo(): void {
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

let prod3: unknown = undefined

// prod3.showInfo();

//! instanceof :  kiểm tra có phải là thể hiện clas không ?

if (prod3 instanceof ProductTyple) {
    prod3.showInfo();
}

let prod4: unknown = undefined;
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
    public ma: number | string = "";
    public ten: string = "";
    private luongCB: number = 1000;
    heSo: number = 1;
    tinhLuong(): number {
        return this.luongCB * this.heSo;

    }
}

class NhanVienKeToan extends NhanVien {
    tinhLuong(): number {
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

class List<T>{
    // truyền dữ liệu đọng 
    data: T[] = [];
    create(newItem: any): void {
        this.data.push(newItem)
    }
    getByID(id: any): any {
        return this.data.find((item: any) => item.id == id);
    }
}

type User = {
    id: string,
    username: string,
    password: string,
}
let userList = new List<User>()
let user: User = { id: "user1", username: "test", password: "654356" };

userList.create(user);
console.log(userList);