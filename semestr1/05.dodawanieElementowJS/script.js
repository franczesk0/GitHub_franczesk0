var i = 1;
function dodaj() {
    const lista = document.getElementById("lista");
    
    const li = document.createElement("li");
    li.innerHTML = i++ 

    lista.appendChild(li);
}