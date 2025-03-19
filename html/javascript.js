let btn = document.getElementById("btn");
let a = 0;

btn.addEventListener("click", function(){
    document.getElementById("txt").textContent = document.getElementById("txtInput").value;
});



document.getElementById("txtInput").addEventListener("input", function(){
    document.getElementById("txt").textContent = document.getElementById("txtInput").value;
    
})


document.getElementById("div-1").addEventListener("click", function(){
    
    
    if(a == 0){
        this.style.backgroundColor = "red";
        a++;
    }else if(a == 1){
        this.style.backgroundColor = "white";
        a++;
    }else 
    if(a == 2){
        this.style.backgroundColor = "#808080";
        a++;
    }else 
    if(a == 3){
        this.style.backgroundColor = "#713BC4";
        a++;
    }else 
    if(a == 4){
        this.style.backgroundColor = "#88DB24";
        a=0;
    }
    
});

document.getElementById("div-2").addEventListener("mouseover", function(){
    
    
    if(a == 0){
        this.style.backgroundColor = "red";
        a++;
    }else if(a == 1){
        this.style.backgroundColor = "white";
        a++;
    }else 
    if(a == 2){
        this.style.backgroundColor = "#808080";
        a++;
    }else 
    if(a == 3){
        this.style.backgroundColor = "#713BC4";
        a++;
    }else 
    if(a == 4){
        this.style.backgroundColor = "#88DB24";
        a=0;
    }
    
});



document.getElementById("div-3").addEventListener("mouseout", function(){
    
    
    if(a == 0){
        this.style.backgroundColor = "red";
        a++;
    }else if(a == 1){
        this.style.backgroundColor = "white";
        a++;
    }else 
    if(a == 2){
        this.style.backgroundColor = "#808080";
        a++;
    }else 
    if(a == 3){
        this.style.backgroundColor = "#713BC4";
        a++;
    }else 
    if(a == 4){
        this.style.backgroundColor = "#88DB24";
        a=0;
    }
    
});