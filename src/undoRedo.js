let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", function(){

    let undo = db.pop();
    redoDB.push(undo);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCanvas();
    
})

redo.addEventListener("click", function(){
    if(redoDB.length >0){
        let redo = redoDB.pop();
        db.push(redo);
    
        drawCanvas();
    }
})

function undoLine(){

    let line = db.pop();
    redoDB.push(line);


    for(let j = 0; j< line.length; j++){
        let pointObject = line[j]; 
        if(pointObject.type == 'md'){
            ctx.strokeStyle = pointObject.color;
            ctx.lineWidth = pointObject.lineWidth;
            ctx.beginPath();
            ctx.moveTo(pointObject.x,pointObject.y);
        }
        else{
            
            ctx.lineTo(pointObject.x,pointObject.y);
            ctx.stroke();
        }
        
    }

    
    
}

function drawCanvas(){
    for(let i = 0; i< db.length; i++){
        let line = db[i];

        for(let j = 0; j< line.length; j++){
            let pointObject = line[j]; 
            if(pointObject.type == 'md'){
                ctx.strokeStyle = pointObject.color;
                ctx.lineWidth = pointObject.lineWidth;
                ctx.beginPath();
                ctx.moveTo(pointObject.x,pointObject.y);
            }
            else{
                
                ctx.lineTo(pointObject.x,pointObject.y);
                ctx.stroke();
            }
            
        }
    }
    
}

