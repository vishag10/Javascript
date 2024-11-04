function up(){
    const circle = document.getElementById("circle");
    let currentTop = parseInt(window.getComputedStyle(circle).top);
    circle.style.top = (currentTop - 10) + "px";
    
}
function down(){
  
    const circle = document.getElementById("circle");
    let currentTop = parseInt(window.getComputedStyle(circle).top);
    circle.style.top = (currentTop + 10) + "px";
}

function rt(){
  
    const circle = document.getElementById("circle");
    let currentRight = parseInt(window.getComputedStyle(circle).left);
    circle.style.left = (currentRight + 10) + "px";
}

function lt(){
  
    const circle = document.getElementById("circle");
    let currentRight = parseInt(window.getComputedStyle(circle).left);
    circle.style.left = (currentRight - 10) + "px";
}