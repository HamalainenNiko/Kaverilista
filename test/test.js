function myFunction() {
    var person = prompt("Lisää nimi");
    var text = "";
do {
    text += person;
}

while ( person < 10);

document.getElementById("demo").innerHTML = person;
console.log(person)
}