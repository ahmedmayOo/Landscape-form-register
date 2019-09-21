function legend(item) {   
    let legend = item.nextElementSibling;
    legend.style.background = "dodgerblue"; 
    legend.style.left = "15px";
    legend.style.top = "-15px";
    legend.style.padding = "0 5px";
    legend.style.zIndex = "1";
    legend.style.fontSize = "1rem";
     
 
    
}  
 
function legendout(item) {
   

    item.value.trim(); 
    var elem = item.tagName;
    
    let legend = item.nextElementSibling;
    if(item.value == "" || item.value ==  " " ) {
        legend.style.position = "absolute"; 
        legend.style.left = "25px";
        legend.style.top = "11px";
        legend.style.transition = "all 0.3s ease-in-out";
        legend.style.color = "#ddd";
        legend.style.fontSize = "1.2rem";
    } 
}
  
 


