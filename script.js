//Dati forniti dall'utente
const chilometriUtente = parseInt(prompt("Inserisci i Chilometri da percorrere."));
const etaUtente = parseInt(prompt("Inserisci la tua età."));

const prezzoChilometri = 0.21;
const totBiglietto = (prezzoChilometri * chilometriUtente);
const prezzo20 = (totBiglietto - ((totBiglietto / 100) * 20));
const prezzo40 = (totBiglietto - ((totBiglietto / 100) * 40));
let prezzoFinale;

const msgPrezzo = "Il prezzo del biglietto è di ";

console.log("Chilometri utente",chilometriUtente);
console.log("Età utente",etaUtente);
console.log("Prezzo senza sconto", totBiglietto);
console.log("Prezzo per under 18", prezzo20);
console.log("Prezzo per over 65", prezzo40);


if (etaUtente < 18) {
  prezzoFinale = (msgPrezzo + prezzo20.toFixed(2) + " euro con lo sconto del 20% per under 18.");
}
else if (etaUtente > 18 && etaUtente < 65) {
  prezzoFinale = (msgPrezzo + totBiglietto.toFixed(2) + " euro.");
}
else if (etaUtente >= 65) {
  prezzoFinale = (msgPrezzo + prezzo40.toFixed(2) + " euro con lo sconto del 40% per over 65.");
}


alert(prezzoFinale);