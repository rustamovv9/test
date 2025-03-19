let a =0;
let sizes = 30;

function qoshish(){
    let h1 = document.getElementById("h1");
    if(a == 1){
        let text = document.createTextNode(" BTN");
        h1.appendChild(text);
    }else{
        h1.innerHTML = " BTN";
    }
}

let colors = ["red","blue","green","yellow","purple","golden","orange"];
let currentIndex = 0;

function Color(){
    let h1 = document.getElementById("h1");
    h1.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

function size(a){
    let h1 = document.getElementById("h1");
    if(a > 0){
        sizes += 10;
        console.log("katta");
        h1.style.fontSize = sizes+ "px";
    }else{
        sizes -= 10;
        console.log("kichik");
        h1.style.fontSize = sizes+ "px";
    }
}
