let nome = prompt("Inserisci il tuo Nome");
console.log(nome);

let cognome = prompt("Inserisci il tuo Cognome");
console.log(cognome);

let colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);

let DatiTuoi = nome + cognome + colorePreferito + "23";
console.log(DatiTuoi);

document.getElementById("result").innerHTML = DatiTuoi;
