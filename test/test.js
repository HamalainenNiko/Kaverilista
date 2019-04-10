function myFunction() {

    var i = 0
    var x = document.getElementById("demo");

    do {
        var person = prompt("Lisää nimi");
        i++;
        x.innerHTML = person.join("<br/>");
        document.getElementById("demo").innerHTML = person;
    }

    while(i < 10) {
    
    }

}