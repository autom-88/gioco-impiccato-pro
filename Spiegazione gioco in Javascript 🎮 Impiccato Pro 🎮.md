

Questo script realizza un semplice **gioco dell'impiccato (Hangman)** in JavaScript. È un ottimo esempio per imparare diversi concetti fondamentali:

- Array
- Variabili
- Funzioni
- Cicli `for`
- Eventi (`addEventListener`)
- Manipolazione del DOM
- Condizioni (`if`)
- Metodi degli array

Analizziamolo riga per riga.

---
# 1. Lista delle parole

Javascript
const words = ["javascript", "html", "css", "function", "variable", "object", "comunque"];

`words` è un array che contiene tutte le parole possibili.

indice:

Javascript
words[0] = "javascript"
words[1] = "html"
words[2] = "css"
...

---
# 2. Variabili di gioco

Javascript
let word = "";
let hidden = [];
let errors = 0;
let used = [];

## word

Contiene la parola estratta casualmente.

Esempio:

Javascript
word = "javascript";

## hidden

Memorizza le lettere nascoste.

Esempio iniziale:

Javascript
["_","_","_","_","_","_","_","_","_","_"]

Durante il gioco:

Javascript
["j","a","_","a","_","c","_","i","_","t"]

## errors

Conta gli errori.

errors = 0;

Ogni lettera sbagliata:

errors++;

## used

Memorizza le lettere già provate.

Esempio:

Javascript
["a","b","m","z"]

---
# 3. Parti dell'impiccato

Javascript
const parts = ["head","body","arm1","arm2","leg1","leg2"];

Array con gli ID HTML delle parti del corpo.

HTML
```
<div id="head"></div>
<div id="body"></div>
<div id="arm1"></div>
```

<div id="head"></div>
<div id="body"></div>
<div id="head"></div>
<div id="body"></div><div id="arm1"></div>

Quando aumenta il numero di errori vengono mostrate progressivamente.

---
# 4. Avvio del gioco

Javascript
```
start();
```

---
# 5. Funzione start()

Javascript
```
function start() {
```

Serve per inizializzare una nuova partita.

## Estrazione casuale

Javascript
```
word = words[Math.floor(Math.random() * words.length)];
```

### Passo 1

Javascript
```
Math.random()
```

```
0.34567
```

### Passo 2

Javascript
```
Math.random() * words.length
```

Se ci sono 7 parole:

0.34567 * 7  
= 2.41969

### Passo 3

Javascript
```
Math.floor(...)
```

Arrotonda per difetto:

```
2
```

### Passo 4

Javascript
```
words[2]
```

Risultato:

Javascript
```
"css"
```

## Creazione parola nascosta

Javascript
```
hidden = Array(word.length).fill("_");
```

Se la parola è:

Javascript
```
"html"
```

allora:

Javascript
```
Array(4)
```

crea

Javascript
```
[empty × 4]
```

e

Javascript
```
.fill("_")
```

diventa:

Javascript
```
["_","_","_","_"]
```

## Reset variabili

errors = 0;  
used = [];

Riparte da zero.

## Aggiornamento schermata

Javascript
```
updateUI();
draw();
createKeyboard();
```

Aggiorna:

- parola
- errori
- lettere usate
- disegno
- tastiera

---
# 6. Creazione tastiera

Javascript
```
function createKeyboard()
```

Genera dinamicamente tutti i pulsanti della tastiera.

## Recupero contenitore

Javascript
```
const keyboard = document.getElementById("keyboard");
```

Cerca:

HTML
```
<div id="keyboard"></div>
```

PULIZIA

Javascript
```
keyboard.innerHTML = "";
```

Cancella eventuali tasti precedenti.

## Alfabeto

Javascript
```
const letters = "abcdefghijklmnopqrstuvwxyz";
```

Stringa con tutte le lettere.

## split()

Javascript
```
letters.split("")
```

Trasforma la stringa in array.

Risultato:
```
[
"a","b","c","d","e",
...
"z"
]
```
## forEach()

Javascript
```
letters.split("").forEach(letter => {
```

Esegue il codice per ogni lettera.

---
# 7. Creazione pulsante

Javascript
```
const btn = document.createElement("div");
```

Crea:

HTML
```
<div></div>
```

## Classe CSS

Javascript
```
btn.classList.add("key");
```
Aggiunge:

HTML
```
<div class="key"></div>
```

TESTO

Javascript
```
btn.innerText = letter;
```

Se la lettera è "a":

HTML
```
<div class="key">a</div>
```

---
# 8. Evento click

Javascript
```
btn.addEventListener("click", () => {    
    handleGuess(letter, btn);
});
```

Quando clicchi:

Javascript
```
handleGuess("a", btn);
```

viene eseguita la funzione.

---
# 9. Gestione tentativo

Javascript
```
function handleGuess(letter, btn)
```

Riceve:

Javascript
```
letter = "a"btn = pulsante cliccato
```

## Controllo duplicati

Javascript
```
if (used.includes(letter)) return;
```

Se la lettera è già stata usata:

Javascript
```
return;
```

La funzione termina subito.

## Salvataggio lettera

Javascript
```
used.push(letter);
```

Aggiunge all'array.

Prima:

Javascript
```
["a","b"]
```

Dopo:

Javascript
```
["a","b","c"]
```

## Disabilita il tasto

Javascript
```
btn.style.pointerEvents = "none";
```

Non può più essere cliccato.

---
# 10. Controllo correttezza

Javascript
```
if (word.includes(letter))
```

Verifica se la parola contiene la lettera.

Esempio:

Javascript
```
"javascript".includes("a")
```

Risultato:

Javascript
```
true
```

---
# 11. Lettera corretta

Javascript
```
btn.classList.add("correct");
```

Colora il pulsante (verde ad esempio).

## Ricerca nella parola

Javascript
```
for (let i = 0; i < word.length; i++)
```

Scorre tutta la parola.

Se trova la lettera:

Javascript
```
if (word[i] === letter)
```

allora:

Javascript
```
hidden[i] = letter;
```

Esempio:

Javascript
```
["_","_","_","_"]
```

Prima:

Javascript
```
["_","_","_","_"]
```

Dopo:

Javascript
```
["h","_","_","_"]
```

---
# 12. Lettera errata

Javascript
```
else {    
	errors++;    btn.classList.add("wrong");
}
```

Incrementa gli errori:

Javascript
```
errors = errors + 1;
```

e colora il pulsante di rosso.

---
# 13. Disegno dell'impiccato

Javascript
```
draw();
```

Chiama:

Javascript
```
function draw()
```

## forEach()

Javascript
```
parts.forEach((id, index) => {
```

Scorre:
```
head
body
arm1
arm2
leg1
leg2
```

## Recupera elemento

Javascript
```
const el = document.getElementById(id);
```

## Mostra o nasconde

Javascript
```
el.style.opacity = index < errors ? "1" : "0";
```

È un operatore ternario:

Javascript
```
condizione ? valoreSeVero : valoreSeFalso
```

Esempio:

Javascript
```
errors = 3
```

Mostra:

Javascript

head
body
arm1

Nasconde:

Javascript
```
arm2
leg1
leg2
```

---
# 14. Aggiornamento schermata

Javascript
```
function updateUI()
```

Aggiorna il testo della pagina.

## Parola

Javascript
```
document.getElementById("word").innerText =
hidden.join(" ");
```

Se:

Javascript
```
["h","t","m","l"]
```

diventa:

Javascript
```
h t m l
```

## Errori

Javascript
```
document.getElementById("attempts").innerText =
"Errori: " + errors + " / 6";
```

Mostra:

```
Errori: 2 / 6
```

## Lettere usate

Javascript
```
used.join(", ")
```

Trasforma:

Javascript
```
["a","b","c"]
```

in

```
a, b, c
```

---
# 15. Controllo vittoria e sconfitta

Javascript
```
function check()
```

## Vittoria

Javascript
```
if (!hidden.includes("_"))
```

Significa:

Javascript
```
NON contiene più "_"
```

Quindi:

Javascript
```
Parola completata
```

Messaggio:

Javascript
```
alert("🎉 Hai vinto! 🎉");
```

Poi:

Javascript
```
start();
```

nuova partita.

## Sconfitta

Javascript
```
if (errors >= 6)
```

Quando il giocatore ha sbagliato 6 volte.

Mostra:

```
💀 Hai perso! La parola era: javascript
```

---
# 16. Reset

Javascript
```
function resetGame() {
    start();
}
```

Serve per un eventuale pulsante HTML:

HTML
```
<button onclick="resetGame()">
Reset
</button>
```

Premendolo:

- sceglie una nuova parola
- azzera errori
- ricrea la tastiera
- cancella lettere usate

---
# Concetti JavaScript imparati con questo progetto

| Concetto           | Dove                               |
| ------------------ | ---------------------------------- |
| Array              | words, hidden, used, parts         |
| Variabili          | word, errors                       |
| Funzioni           | start(), draw(), check()           |
| Eventi             | addEventListener()                 |
| DOM                | getElementById()                   |
| Cicli              | for, forEach                       |
| Condizioni         | if / else                          |
| Array Methods      | push(), includes(), join(), fill() |
| String Methods     | split(), includes()                |
| Random             | Math.random()                      |
| Operatore ternario | `condizione ? vero : falso`        |

Questo progetto è molto utile perché combina insieme quasi tutti i concetti base di JavaScript che normalmente si studiano nelle prime settimane di apprendimento.