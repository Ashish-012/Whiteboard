let canvas = document.querySelector("#canvas");


canvas.height = window.innerHeight - 60;
canvas.width = window.innerWidth;

db = []
redoDB = []
lines = []

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    drawCanvas();
})

var ctx = canvas.getContext("2d");
ctx.lineCap = "round";
let isMouseDown = false;



canvas.addEventListener("mousedown", function(e){
    redoDB = [];
    
    if(redoDB.length <1){
        redo.classList.add("opClass");
    }
    isMouseDown= true;
    let x = e.clientX
    let y =  e.clientY -60;
    ctx.beginPath();
    ctx.moveTo(x,y);
    let pointObj = {
        type : "md",
        color : ctx.strokeStyle,
        lineWidth : ctx.lineWidth,
        x : x,
        y : y
    }
    lines.push(pointObj)

})

canvas.addEventListener("mousemove", function(e){

    if(isMouseDown){
        
        let x = e.clientX
        let y =  e.clientY -60;
        ctx.lineTo(x,y);
        ctx.stroke();   
        let pointObj ={
            type : 'mm',
            x : x,
            y : y
        }
        lines.push(pointObj);
    }
})

canvas.addEventListener("mouseup", function(e){
    isMouseDown = false;
    db.push(lines);
    lines = []
    if(db.length >0){
        undo.classList.remove("opClass");
    }
    
})