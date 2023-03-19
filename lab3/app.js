do {
    let a = prompt(parseInt(a));
    alert("1 tính trung bình điểm ");
    alert("2 tinh trung bình điểm");
    alert("3 thoat");

    switch (a) {
        case 1:
            console.log("tính điểm trung bình");
    let a = prompt(" nhap toán "+parseFloat(a));
    let b = prompt(" nhap hóa"+ parseFloat(b));
    let c = prompt(" nhap lý"+  parseFloat(c));
    let d = prompt(" nhâp sinh"+  parseFloat(d))
    
    let tb= (a+b+c+b)/4;
    
    
            switch (tb) {
                case 10:
                    case 9: console.log(" gioi")
    
                    break;
                case 8:
                    case 7: console.log(" khá")
                    break;
    
                    case 6:
                        case 5:console.log("trung bình")
                        break;
                default: console.log(" yếu")
    
                    break;
            }
            
            break;
             case 2: 
    
              console.log("tính điểm trung bình" );
             let toan = prompt(" nhap toán "+ parseFloat (toan));
             let hoa= prompt(" nhap hóa" +parseFloat (hoa));
             let ly = prompt(" nhap lý" +parseFloat (ly));
             let sinh = prompt(" nhâp sinh" +parseFloat (sinh))
            
             let kq= (a+b+c+b)/4;
    
             if (kq>=9) {
                console.log("gioi")
                
             }else if (kq>=7) {
                console.log("khá")
                
             }else if (kq>=5) {
                console.log("trung bình")
                
             }else{
                console.log("yếu")
             }
    
        default:
            console.log("thoát");
            break;
    }
} while (condition);
