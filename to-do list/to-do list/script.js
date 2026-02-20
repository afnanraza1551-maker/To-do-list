let userinput = document.getElementById("userinput");
function add() {
    if (userinput.value === "") {
        alert("enter a task first");
    };
    document.getElementById("result").innerHTML += "<li>" + userinput.value + "</li>";

    document.getElementById("userinput").value = "";
};