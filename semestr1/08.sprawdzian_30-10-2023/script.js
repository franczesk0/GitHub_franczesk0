async function getData() {
    const dane = await fetch("https://restcountries.com/v3.1/all");
    const json = await dane.json();
    console.log(json);

    for (let i = 0; i <= json.length - 1; i++) {

        const divCountry = document.createElement("div");
        divCountry.classList.add("divCountry");

        const data = document.createElement("p");
        data.classList.add("data");
        data.innerHTML = json[i].name.common;

        const capital = document.createElement("p")
        capital.classList.add("capital");
        capital.innerHTML = json[i].capital;
        
        divCountry.appendChild(data);
        divCountry.appendChild(capital);
        document.getElementById("content").appendChild(divCountry);
    }
}

getData();