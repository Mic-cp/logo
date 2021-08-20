
canvas=document.getElementById("e")
canvas.addEventListener("mousedown", press)
context=canvas.getContext("2d")
function press(et){
x=et.clientX-canvas.offsetLeft
y=et.clientY-canvas.offsetTop
crcile(x,y)
}
color="red"
function crcile(x,y){
    context.beginPath() ;
    context.linewidth= 1 ;
    context.strokeStyle=color;
    context.arc(x,y,20,0,2*Math.PI)
    context.stroke()
   
}
context.beginPath() ;
context.linewidth= 1 ;
context.strokeStyle="blue";
context.arc(200,200,50,0,2*Math.PI)
context.stroke()

context.beginPath() ;
context.linewidth= 1 ;
context.strokeStyle="yellow";
context.arc(260,250,50,0,2*Math.PI)
context.stroke()

context.beginPath() ;
context.linewidth= 1 ;
context.strokeStyle="black";
context.arc(325,200,50,0,2*Math.PI)
context.stroke()

context.beginPath() ;
context.linewidth= 1 ;
context.strokeStyle="green";
context.arc(386,250,50,0,2*Math.PI)
context.stroke()

context.beginPath() ;
context.linewidth= 1 ;
context.strokeStyle="red";
context.arc(450,200,50,0,2*Math.PI)
context.stroke()

