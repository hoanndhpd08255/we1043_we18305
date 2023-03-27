let a1 = prompt("nhap so nguyen a:");
let b1 = prompt ("nhap so nguyen b: ");
let c1 = prompt("nhap so nguyen c:");
 
let a = parseInt(a1);
let b = parseInt(b1);
let c = parseInt(c1);

 let delta = b*b-4*a*c;

 if(delta < 0) {
    document.write("phuong trinh vo nghiem");
 }
  else if(delta = 0){
    let x=-(b/(2*a));
    document.write("phuong trinh co nghiem kep:"+x);
 }
 else{ 
    let x1= -(b - Math.sqrt(delta)/(2*a));
    let x2= -(b+Math.sqrt(delta))/(2*a);
    document.write("phuong trinh co 2 nghiem phan biet:"+ x1 +x2);
 }
