function myFunction(){
    var person = prompt("Kirjoita kaverisi nimi");
    

    for(var i=1; i<=10; i++) {
        document.getElementById("demo").innerHTML = person;

        i++;
    }

    
}