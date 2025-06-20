function checkPrim() {
  const eingabe = document.getElementById("zahl").value.trim();
  const ergebnisDiv = document.getElementById("ergebnis");
  const zahl = parseInt(eingabe);

  if (isNaN(zahl) || zahl < 2) {
    ergebnisDiv.textContent = "ungültig/keine Zahl";
    return;
  }

  if (istPrimzahl(zahl)) {
    ergebnisDiv.textContent = "Primzahl";
  } else {
    ergebnisDiv.textContent = "keine Primzahl";
  }
}

function istPrimzahl(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}