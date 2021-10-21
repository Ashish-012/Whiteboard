let canvas = document.querySelector("#canvas");

canvas.height = window.innerHeight - 60;
canvas.width = window.innerWidth;

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

var ctx = canvas.getContext("2d");
let isMouseDown = false;

canvas.addEventListener("mousedown", function(e){
    isMouseDown= true;
    let x = e.clientX
    let y =  e.clientY -60;
    ctx.beginPath();
    ctx.moveTo(x,y);

})

canvas.addEventListener("mousemove", function(e){
    if(isMouseDown){
        let x = e.clientX
        let y =  e.clientY -60;
        ctx.lineTo(x,y);
        ctx.stroke();   
    }
})

canvas.addEventListener("mouseup", function(e){
    isMouseDown = false;
})