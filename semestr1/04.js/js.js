var number = 1
function wyswietl(nazwa) {
    cell = document.getElementById(nazwa)
    console.log(cell.innerHTML.length)
    if (cell.innerHTML.length == 0) {
        number++
        document.getElementById(nazwa).innerHTML = number
        if (number%2==0) {
            document.getElementById(nazwa).style.backgroundColor="red"
        } else {
            document.getElementById(nazwa).style.backgroundColor="blue"
    }}
}
