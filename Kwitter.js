function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";

    document.getElementById("name_label").innerHTML = localStorage.getItem("user_name");
}