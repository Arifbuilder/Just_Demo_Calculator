function clickbutton(val) {
    document.getElementById("screen").value += val;
}

function clearDisplay() {
    document.getElementById("screen").value = "";
}

function equalClick() {
    var text = document.getElementById("screen").value;
    try {
        var result = eval(text);
        if (result === undefined || isNaN(result) && text !== "") {
            document.getElementById("screen").value = "Error";
        } else {
            document.getElementById("screen").value = result;
        }
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}