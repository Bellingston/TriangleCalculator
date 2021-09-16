function findKatet() {
    var a=document.getElementById('dataA').value;
    var c=document.getElementById('dataC').value;
    z=parseFloat(a, 10);
    y=parseFloat(c, 10);

    if (isNaN(z) || isNaN(y)) {
        alert("Введите числа!");
    }

    else if (y == 0 || z == 0) {
        alert("Вводимые значения не могут быть нулевыми!");
    }

    else if (y < 0 || z < 0) {
        alert("Вводимые значения не могут быть отрицательными!");
    }

    else if (y <= z ) {
        alert("Катет не может быть больше гипотенузы!");
    }

    else {
        result = Math.sqrt((Math.pow(y, 2)) - (Math.pow(z, 2)), 2);
        document.getElementById("res").value = result;
    }
}

function findRadius() {
    var a=document.getElementById('dataA').value;
    var c=document.getElementById('dataC').value;
    z=parseFloat(a, 10);
    y=parseFloat(c, 10);

    if (isNaN(z) || isNaN(y)) {
        alert("Введите числа");
    }

    else if (y == 0 || z == 0) {
        alert("Вводимые значения не могут быть нулевыми!");
    }

    else if (y < 0 || z < 0) {
        alert("Вводимые значения не могут быть отрицательными!");
    }

    else if (y <= z ) {
        alert("Катет не может быть больше гипотенузы!");
    }

    else {
        x = (Math.sqrt((Math.pow(y, 2)) - (Math.pow(z, 2)), 2));
        result = (x + z - y) / 2;
        document.getElementById("res").value = result;
    }
}