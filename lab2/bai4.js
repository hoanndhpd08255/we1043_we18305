let arr = ["Tue", "Thu", "Sat", "Nine"];
console.log("Mảng ban đầu: " + arr);
arr.pop(); 
console.log("Mảng sau khi xoá phần tử cuối:  "+arr)
arr.splice(0, 0,  "Mon"); 
arr.splice(2, 0,  "Wed"); 
arr.splice(4, 0,  "Fri"); 
arr.push("Sun");  
console.log("Mảng sau khi đã được thêm và sắp xếp:  "+arr);