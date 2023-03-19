let a = parseFloat(prompt("Nhập cạnh a: "));
let b = parseFloat(prompt("Nhập cạnh b: "));
let c = parseFloat(prompt("Nhập cạnh c: "));

if (a + b > c && b + c > a && c + a > b) {
  if (a == b && b == c) {
    console.log("Tam giác này là tam giác đều.");
  } else if (a == b || b == c || c == a) {
    console.log("Tam giác này là tam giác cân.");
  } else if ( a*a + b*b == c*c || b*b + c*c == a*a || c*c + a*a == b*b) {
    console.log("Tam giác này là tam giác vuông.");
  } else {
    console.log("Tam giác này là tam giác thường.");
  }
} else {
  console.log("Đây không phải là 3 cạnh của một tam giác.");
}
