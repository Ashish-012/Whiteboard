let sticky = document.querySelector("#stickynote");

sticky.addEventListener("click",appendSticky);

function appendSticky(elem){

    let note = document.createElement("div");
    let isImage = false;
    if(elem.classList){
        isImage = true;
        note.innerHTML = `<div class="sticky-nav">
                        <div class="minimise-sticky">-</div>
                        <div class="delete-sticky">x</div>
                    </div>
                    <div class="sticky-image" >
                        
                    </div>`
        note.classList.add("sticky");
        note.querySelector(".sticky-image").append(elem);
    }
    else{
        note.innerHTML = `<div class="sticky-nav">
                        <div class="minimise-sticky">-</div>
                        <div class="delete-sticky">x</div>
                    </div>
                    <div class="sticky-note" contenteditable = "true">
                        
                    </div>`
        note.classList.add("sticky");

    }
    

    document.querySelector('body').append(note);

    note.querySelector(".delete-sticky").addEventListener("click", function(){
        note.remove();
    })

    note.querySelector(".minimise-sticky").addEventListener("click", function(){
        let stickycss = document.querySelector(".sticky");
        if(isImage){
            stickyContent = note.querySelector(".sticky-image");
            if(stickyContent.classList.contains("inactive")){
                stickyContent.classList.remove("inactive");
                stickycss.style.boxShadow ="7px 10px 12px #39813d";
            }  
            else{    
                stickyContent.classList.add("inactive");
                stickycss.style.boxShadow ="none";
            }
        }
        else{
            stickyContent = note.querySelector(".sticky-note");
            if(stickyContent.classList.contains("inactive")){
                stickyContent.classList.remove("inactive");
                stickycss.style.boxShadow ="7px 10px 12px #39813d";
            }  
            else{    
                stickyContent.classList.add("inactive");
                stickycss.style.boxShadow ="none";
            }
        }
        
    })
    let noteHeader = note.querySelector(".sticky-nav");
    let isMouseDown = false;
    let prevMouseX;
    let prevMouseY;

    noteHeader.addEventListener("mousedown", function(e){
        isMouseDown = true;
        
        let x = e.clientX;
        let y = e.clientY;
        prevMouseX = x;
        prevMouseY = y;
    })

    noteHeader.addEventListener("mousemove", function(e){
        if(isMouseDown){
            let x = e.clientX;
            let y = e.clientY;
            let changeX = x - prevMouseX  ;
            let changeY = y - prevMouseY ;

            let {top, left} = note.getBoundingClientRect();

            note.style.top = top + changeY +"px";
            note.style.left = left + changeX +"px";

            prevMouseX = x;
            prevMouseY = y;
        }
    })
    
    noteHeader.addEventListener("mouseup", function(e){
        isMouseDown = false;
    })
}