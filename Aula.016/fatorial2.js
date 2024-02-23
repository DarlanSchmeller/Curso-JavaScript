// RECURSIVIDADE (QUANDO UMA VARIÁVEL CHAMA A SI MESMA.)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let resultado = fatorial(5)
console.log(resultado)


/* 

5! = 5 x 4 x 3 x 2 x 1 

4! = 4 x 3 x 2 x 1

5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/