let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilToolOptions = document.querySelector(".tool-options");
let eraserToolOptions = document.querySelector(".eraser-options")
let pencilSize = pencil.querySelector("input");
let eraserSize = eraser.querySelector("input");
let pencilColours = pencil.querySelectorAll(".pencil-colour div");
let deleteAll = eraser.querySelector(".delete")

let selectedTool = "pencil";

let currentPencilSize = 1;
let currentEraserSize = 1;
let currentPencilColour = "black";

for(let i = 0; i< pencilColours.length; i++){
    pencilColours[i].addEventListener("click", function(){
        ctx.strokeStyle = pencilColours[i].className;
        currentPencilColour = pencilColours[i].className;
    })
}

pencil.addEventListener("click", function(){
    if(selectedTool == "pencil"){
        if(!pencilToolOptions.classList.contains("inactive")){
            pencilToolOptions.classList.add("inactive");
        }
        else{

            pencilToolOptions.classList.remove("inactive");
        }

    }else{
        eraserToolOptions.classList.add("inactive");
        selectedTool = "pencil";
        ctx.lineWidth = currentPencilSize;
        ctx.strokeStyle = currentPencilColour;

    }
    
})

eraser.addEventListener("click", function(){
    if(selectedTool == "eraser"){
        if(!eraserToolOptions.classList.contains("inactive")){
            eraserToolOptions.classList.add("inactive");
        }
        else{

            eraserToolOptions.classList.remove("inactive");
        }
        
    }
    else{

        pencilToolOptions.classList.add("inactive");
        selectedTool = "eraser";
        ctx.lineWidth = currentEraserSize;
        ctx.strokeStyle = "White";
    }
    
    
})

pencilSize.addEventListener("change", function(){
    currentPencilSize = pencilSize.value;
    ctx.lineWidth = currentPencilSize;
})

eraserSize.addEventListener("change", function(){
    currentEraserSize = eraserSize.value;
    ctx.lineWidth = currentEraserSize;
})

deleteAll.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    db = [];
    redoDB= [];
    lines = [];
})