let image = document.querySelector("#upload");
let upload = document.querySelector("#photo-upload");
let download = document.querySelector("#download")

image.addEventListener("click", function(){
    upload.click();
})

upload.addEventListener("change", function(e){
    let fileObj = e.target.files[0];
    let img = document.createElement("img");
    img.classList.add("uploaded-image")
    img.src = URL.createObjectURL(fileObj);

    appendSticky(img);
})

download.addEventListener("click", function(e){

    
    let canvasURL = canvas.toDataURL({type: "image/png"})
    let aTag = document.createElement("a");
    aTag.download = "canvas.png";
    aTag.href = canvasURL;
    aTag.click();
})