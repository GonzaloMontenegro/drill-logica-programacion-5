function checkGuess() {
    var guess = document.getElementById("number").value;
    var numero = 20; // este es el número que el usuario tiene que adivinar
    const input = document.getElementById("number");
    const result = document.getElementById("result");
    const value = parseInt(input.value);
    if (value < 1 || value > 100) {
        result.innerHTML = "Por favor, introduce un número entre 1 y 100.";
        result.style.color = "red";
        return;
    }
    if (guess == numero) {
        result.innerHTML = "Felicidades, adivinaste el número secreto" + numero ;
        result.style.color = "green";
    }
    else if (guess < numero) {
        result.innerHTML = "Demasiado bajo. Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        result.style.color = "red";
        return;
    } else if (guess > numero) {
        result.innerHTML = "Demasiado alto. Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        result.style.color = "red";
        return;
    }
}
