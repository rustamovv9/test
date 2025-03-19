let table = document.getElementById("myTable");

let array = [

];

arrayToHtml();

function ochirish(){
    let trlar = document.getElementsByTagName("tr");
    for(let i = trlar.length - 1 ; i > 0; i--){
        table.removeChild(trlar[i]);
    }
}


function arrayToHtml(){
    for(let i = 0; i < array.length; i++){
        qoshish(array[i]);
    }
}

function qoshish2(){
    let i = 1;
    if(array.length != 0){
        i = array[array.length - 1].id + 1
    }

    let a = {
        id: i,
        nomi:"Name"+i,
        rangi:"Surname"+i,
        modeli:"address"+i,
    }

    array.push(a);
    ochirish();
    arrayToHtml();
}

function ochir(id){
    for(let i = 0; i < array.length ; i++){
        if(array[i].id == id){
            console.log(id);
            array.splice(i, 1)
        }
    }
    ochirish();
    arrayToHtml();
}


function qoshish(malumot) {
    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.textContent = malumot.id;
    tr.appendChild(td);

    let td1 = document.createElement("td");
    td1.textContent = malumot.nomi;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = malumot.rangi;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = malumot.modeli;
    tr.appendChild(td3);


    table.appendChild(tr);
}