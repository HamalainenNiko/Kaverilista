function myFunction(){
    var person = prompt("Kirjoita kaverisi nimi");

    if (person != null) {
        document.getElementById("demo").innerHTML =
        person;
    }
}