// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
numbersIncluded = (array, a, b) => {
    const risultato = []
    for (let i = a; i <= b; i++) {
      risultato.push(array[i])
    }
    return risultato
}

const names = ["Paolo", "Francesco", "Luca", "Carlo", "Stefano", "Franco"]
const a = 2
const b = 4

const risultato = numbersIncluded(names, a, b)
console.log(risultato)