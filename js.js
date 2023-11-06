var number = 1
function wyswietl(nazwa) {
    document.getElementById(nazwa).innerHTML = number
    if (number%2==0) {
        document.getElementById(nazwa).style.backgroundColor="red"
    } else {
        document.getElementById(nazwa).style.backgroundColor="blue"
    }
    number++
}
