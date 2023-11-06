async function getdata() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    console.log(json);
    const lista = document.getElementById("lista");
    for(let i=0; i<=json.length-1; i++) {
        if (json[i].continents.includes("Europe") & json[i].population>30000000) {
        const li = document.createElement("li");
        li.innerHTML = json[i].name.common;
        lista.appendChild(li);
        //console.log(json[i].name.common)
    }}
}
getdata()