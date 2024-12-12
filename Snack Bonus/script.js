// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
numbersIncluded = (array, a, b) => {
    const risultato = []
    for (let i = a; i < b -1; i++) {
      risultato.push(array[i])
    }
    return risultato
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
const a = 2
const b = 8

const risultato = numbersIncluded(nums, a, b)
console.log(risultato)