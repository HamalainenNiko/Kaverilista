var names = [];

function listFriends() {
    names.push(document.getElementsByClassName("userinput").value);
    document.getElementById("demo").innerHTML = names;
    var x = document.getElementById("demo");
    x.innerHTML = names.join("<br/>");
    console.log();
}