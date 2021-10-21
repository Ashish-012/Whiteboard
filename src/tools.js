let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilToolOptions = document.querySelector(".tool-options");
let eraserToolOptions = document.querySelector(".eraser-options")

let selectedTool = "pencil";

pencil.addEventListener("click", function(){
    if(selectedTool == "pencil"){
        pencilToolOptions.classList.remove("inactive");

    }else{
        eraserToolOptions.classList.add("inactive");
        selectedTool = "pencil";
    }
    ctx.strokeStyle = "Black";
})

eraser.addEventListener("click", function(){
    if(selectedTool == "eraser"){
        eraserToolOptions.classList.remove("inactive");
        
    }
    else{
        pencilToolOptions.classList.add("inactive");
        selectedTool = "eraser";
    }
    
    ctx.strokeStyle = "White";
})