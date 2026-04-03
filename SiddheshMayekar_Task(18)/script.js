function greet() {
    var name = document.getElementById("name").value;
    document.getElementById("heading").innerText = "Hello " + name;
}

function changeColor(element, color) {
    element.style.backgroundColor = color;
} 