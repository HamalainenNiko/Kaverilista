var names = [];

function addFriend() {
    names.push(document.getElementById("userinput").value);
    document.getElementById("demo").innerHTML = names;
    var x = document.getElementById("demo");
    x.innerHTML = names.join("<br/>");
    console.log();
}

function removeFriend() {
    names.pop();
    document.getElementById("demo").innerHTML = names;
    var x = document.getElementById("demo");
    x.innerHTML = names.join("<br/>");
    console.log();
}

function sortFriends() {
    names.sort();
    document.getElementById("demo").innerHTML = names;
    var x = document.getElementById("demo");
    x.innerHTML = names.join("<br/>");
    console.log();
}