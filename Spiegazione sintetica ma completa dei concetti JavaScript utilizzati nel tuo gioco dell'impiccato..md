
## INDICE

|Concetto|Scopo|
|---|---|
|Array|Memorizzare più valori|
|Variabili|Memorizzare dati|
|Funzioni|Riutilizzare codice|
|Eventi|Rispondere alle azioni dell'utente|
|DOM|Manipolare HTML|
|Cicli|Ripetere operazioni|
|Condizioni|Prendere decisioni|
|String Methods|Lavorare con il testo|
|Random|Generare valori casuali|
|Operatore ternario|Versione compatta di if/else|

Questi 10 concetti costituiscono la base della programmazione JavaScript e sono sufficienti per realizzare giochi semplici, form interattivi, menu dinamici e molte applicazioni web.

---
# 1. Array

Un **array** è una struttura dati che permette di memorizzare più valori in una sola variabile.

Javascript
```
const words = ["javascript", "html", "css"];
```

Accesso agli elementi:

Javascript
console.log(words[0]); // javascript  
console.log(words[1]); // html

Nel tuo progetto:

Javascript
```
words
hidden
used
parts
```

sono tutti array.

---

# 2. Variabili

Una variabile serve a memorizzare un valore.

Javascript
```
let nome = "Mario";
let eta = 30;
```

Nel gioco:

Javascript
```
let word = "";
let errors = 0;
```

- `word` contiene la parola scelta.
- `errors` conta gli errori.

---
# 3. Funzioni

Una funzione è un blocco di codice che esegue un compito specifico.

Javascript
```
function saluta() {    
	console.log("Ciao!");
}
```

Esecuzione:

Javascript
```
saluta();
```

Nel progetto:

Javascript
```
start();  
draw();  
updateUI();  
check();
```

---
# 4. Eventi

Un evento è un'azione eseguita dall'utente.

Esempi:

- click
- tasto premuto
- movimento del mouse

Javascript
```
button.addEventListener("click", function() {    
	console.log("Hai cliccato");
});
```

Nel gioco:
```
btn.addEventListener("click", () => {    
	handleGuess(letter, btn);
});
```

Quando clicchi una lettera viene eseguita la funzione.

---
# 5. DOM

DOM significa **Document Object Model**.

Permette a JavaScript di accedere agli elementi HTML.

HTML:
```
<p id="word"></p>
```

Javascript
```
document.getElementById("word");
```

Modificare il testo:

Javascript
```
document.getElementById("word").innerText = "Ciao";
```

Nel gioco viene usato per:

Javascript
```
document.getElementById("word")
document.getElementById("attempts")
document.getElementById("used")
```

---
# 6. Cicli

Un ciclo ripete un'operazione.

## for

Javascript
```
for(let i = 0; i < 5; i++) {
    console.log(i);
}
```

Output:

0  
1  
2  
3  
4

Nel gioco:

Javascript
```
for(let i = 0; i < word.length; i++)
```
serve per controllare tutte le lettere della parola.

## forEach

Javascript
```
const numeri = [1,2,3];numeri.forEach(numero => {    
	console.log(numero);

});
```

Output:

1  
2  
3

Nel gioco:

Javascript
```
parts.forEach(...)
```

---
# 7. Condizioni

Permettono di prendere decisioni.

Javascript
```
if (eta >= 18) {    
	console.log("Maggiorenne");
}
```

Con alternativa:

Javascript
```
if (eta >= 18) {  
	console.log("Maggiorenne");  
} else {  
	console.log("Minorenne");  
}
```

Nel gioco:

Javascript
```
if(word.includes(letter))
```

verifica se la lettera è presente.

---
# 8. String Methods

Le stringhe possiedono metodi utili.

## includes()

Controlla se un testo contiene un valore.

Javascript
```
"javascript".includes("a");
```

Risultato:

```
true
```

## split()

Divide una stringa.

```
"ciao".split("");
```

Risultato:

```
["c","i","a","o"]
```

Nel gioco:

```
letters.split("")
```

## length

Restituisce la lunghezza.

```
"javascript".length
```

Risultato:
```
10
```

---
# 9. Random

Serve per generare valori casuali.

## Math.random()

Genera un numero tra 0 e 1.

Javascript
```
Math.random();
```

Possibili risultati:
```
0.12
0.56
0.89
```

## Math.floor()

Arrotonda per difetto.

Javascript
```
Math.floor(4.9);
```

Risultato:

Javascript
```
4
```

## Estrazione casuale da un array

Javascript
```
const indice =  
Math.floor(Math.random() * words.length);  
  
word = words[indice];
```

Esempio:

Javascript
```
words = ["html","css","javascript"];
```

Se l'indice è:

Javascript
```
2
```

Otteniamo:

Javascript
```
"javascript"
```

---
# 10. Operatore Ternario

È una forma compatta di `if/else`.

Sintassi:

Javascript
```
condizione ? valoreSeVero : valoreSeFalso;
```

Esempio:

Javascript
```
let eta = 20;  
  
let risultato =  
eta >= 18 ? "Maggiorenne" : "Minorenne";  
  
console.log(risultato);
```

Output:

	Maggiorenne

Nel gioco:

Javascript
```
el.style.opacity =
index < errors ? "1" : "0";
```

Equivale a:

Javascript
```
if(index < errors) {
    el.style.opacity = "1";
} else {
        el.style.opacity = "0";
}
```

Significato:

- se la parte dell'impiccato deve essere visibile → opacità 1
- altrimenti → opacità 0
