function myFunction(){
    let person = prompt("Kirjoita kaverisi nimi");
    

    for(var i=1; i<=10; i++) {
        document.write(`${person}`);
        document.write('<br>');

        i++;
    }

    
}