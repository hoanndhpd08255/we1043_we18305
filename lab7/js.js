function allowDrop(ev) {
    ev.preventDefault(); 
}

//drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//drog
function drop(ev) {
    ev.preventDefault(); 
    var data = ev.dataTransfer.getData("text"); //lấy dữ liệu được kéo
    ev.target.appendChild(document.getElementById(data)); //hàm appendchill() dùng để thêm phần tử đó vào trong phần tử mục tiêu được thả vào
}