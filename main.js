function formValidation()
{
var friend = document.registration.friend;

if(friend_validation(friend,2,20))
return false;
}


function friend_validation(friend,mx,my)
{
    var friend_len = friend.value.length;
    if (friend_len == 0 || friend_len > my || friend_len < mx)
{
alert("Täytä kaikki palkit");
friend.focus();
return false;
}
return true;
}