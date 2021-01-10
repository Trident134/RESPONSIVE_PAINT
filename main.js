var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    current_postitio_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("last position of X and Y coordinates");
        console.log("X=" + last_position_of_x);
        console.log("Y=" + last_position_of_y);
        ctx.lineTo(current_postitio_of_mouse_x,current_position_of_mouse_y);
        console.log("current position of X and Y coordinates");
        console.log("X=" + current_postitio_of_mouse_x);
        console.log("Y=" + current_position_of_mouse_y);
        ctx.stroke();
    }   
     last_position_of_x=current_postitio_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(){
    mouse_event="mouseleave";
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(){
    mouse_event="mouseup";
}