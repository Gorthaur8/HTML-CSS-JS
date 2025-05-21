// Initialisierung einer leeren Variablen 'expression' zur Speicherung der Benutzereingaben
let expression = '';

// Funktion 'press', die aufgerufen wird, wenn ein Taschenrechner-Button gedrückt wird
function press(num) {
    // Fügt die gedrückte Zahl oder das Operatorzeichen zur 'expression' hinzu
    expression += num;
    // Aktualisiert das Display des Taschenrechners mit der aktuellen 'expression'
    document.getElementById('display').value = expression;
}

// Funktion 'calculate', die aufgerufen wird, wenn der Gleichheitszeichen-Button gedrückt wird
function calculate() {
    // Auswertung der 'expression' und Anzeige des Ergebnisses im Display
    document.getElementById('display').value = eval(expression);
    // Setzt die 'expression' zurück, um eine neue Berechnung zu beginnen
    expression = '';
}

// Funktion zum Löschen des Displays und Zurücksetzen der 'expression'
function clearDisplay() {
    // Setzt die 'expression' zurück
    expression = '';
    // Setzt das Display des Taschenrechners zurück
    document.getElementById('display').value = '';
}

// Ereignishandler, der beim Laden der Seite ausgeführt wird
window.onload = function() {
    // Zuweisen von Funktionen zu den entsprechenden Buttons
    document.querySelectorAll('.buttons button').forEach(function(button) {
        if (button.innerText === '=') {
            button.onclick = calculate; // Zuweisen der 'calculate'-Funktion
        } else if (button.innerText === 'C') {
            button.onclick = clearDisplay; // Zuweisen der 'clearDisplay'-Funktion
        } else {
            button.onclick = function() { press(button.innerText); }; // Zuweisen der 'press'-Funktion
        }
    });
}