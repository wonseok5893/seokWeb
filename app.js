const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const CANVAS_SIZE = 700;
const INITIAL_COLOR = "#2c2c2c"
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}
function onMouseUp(event){
    stopPainting();
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("click",handleCanvasClick);
}

const colors = document.getElementsByClassName("jsColor");
const arrayColors = Array.from(colors);
arrayColors.forEach(color => color.addEventListener("click",changeColor))

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }
}
function changeColor(event){
    const clickColor = event.target.style.backgroundColor;
    ctx.strokeStyle = clickColor;
    ctx.fillStyle = clickColor;
}

const range = document.getElementById("jsRange");
if(range){
    range.addEventListener("input", changeRange)

}
function changeRange(event){
    const clickRange = event.target.value;
    ctx.lineWidth = clickRange;
    
}

const mode = document.getElementById("jsMode");
let filling = false;
if(mode){
    mode.addEventListener("click", clickMode)
}

function clickMode(event){
    if(filling === true){
        filling = false;
        mode.innerText = "fill";
    }
    else{
        filling = true;
        mode.innerText = "paint";
        
    }
}

